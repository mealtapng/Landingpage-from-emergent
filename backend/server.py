from fastapi import FastAPI, APIRouter
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class PitchDeckRequest(BaseModel):
    full_name: str
    email: str
    phone: Optional[str] = None
    organisation: Optional[str] = None
    role_title: Optional[str] = None
    request_reason: str
    more_about_interest: str
    heard_about: Optional[str] = None

class PitchDeckRequestResponse(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str
    full_name: str
    email: str
    phone: Optional[str] = None
    organisation: Optional[str] = None
    role_title: Optional[str] = None
    request_reason: str
    more_about_interest: str
    heard_about: Optional[str] = None
    submitted_at: str

class WaitlistRequest(BaseModel):
    full_name: str
    email: str
    phone: str
    company: Optional[str] = None
    why_mealtap: str

class WaitlistRequestResponse(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str
    full_name: str
    email: str
    phone: str
    company: Optional[str] = None
    why_mealtap: str
    submitted_at: str


# Routes
@api_router.get("/")
async def root():
    return {"message": "Mealtap API"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks

@api_router.post("/pitch-deck-request", response_model=PitchDeckRequestResponse)
async def submit_pitch_deck_request(request: PitchDeckRequest):
    doc = request.model_dump()
    doc['id'] = str(uuid.uuid4())
    doc['submitted_at'] = datetime.now(timezone.utc).isoformat()
    await db.pitch_deck_requests.insert_one(doc)
    doc.pop('_id', None)
    return PitchDeckRequestResponse(**doc)

@api_router.get("/pitch-deck-requests", response_model=List[PitchDeckRequestResponse])
async def get_pitch_deck_requests():
    requests = await db.pitch_deck_requests.find({}, {"_id": 0}).to_list(1000)
    return requests

@api_router.post("/waitlist-request", response_model=WaitlistRequestResponse)
async def submit_waitlist_request(request: WaitlistRequest):
    doc = request.model_dump()
    doc['id'] = str(uuid.uuid4())
    doc['submitted_at'] = datetime.now(timezone.utc).isoformat()
    await db.waitlist_requests.insert_one(doc)
    doc.pop('_id', None)
    return WaitlistRequestResponse(**doc)

@api_router.get("/waitlist-requests", response_model=List[WaitlistRequestResponse])
async def get_waitlist_requests():
    requests = await db.waitlist_requests.find({}, {"_id": 0}).to_list(1000)
    return requests


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()

# Serve React static files (for Render full-stack deployment)
STATIC_DIR = ROOT_DIR / "static"
if STATIC_DIR.exists():
    app.mount("/static", StaticFiles(directory=str(STATIC_DIR / "static")), name="static-assets")

    @app.get("/{full_path:path}")
    async def serve_react(full_path: str):
        """Serve React app for all non-API routes"""
        file_path = STATIC_DIR / full_path
        if file_path.is_file():
            return FileResponse(str(file_path))
        return FileResponse(str(STATIC_DIR / "index.html"))

# Mealtap Deployment Guide

## Architecture Overview
```
Frontend (React) → Netlify (free)
Backend (FastAPI) → Render (free tier)
Database (MongoDB) → MongoDB Atlas (free tier)
```

---

## STEP 1: Set Up MongoDB Atlas (Database)

1. Go to [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account and a **free M0 cluster**
3. In **Database Access**, create a database user (save the username & password)
4. In **Network Access**, add `0.0.0.0/0` to allow all IPs (or restrict to Render's IPs later)
5. Click **Connect** → **Connect your application** → Copy the connection string
6. It will look like: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/mealtap_db?retryWrites=true&w=majority`
7. Replace `<password>` with your actual password

---

## STEP 2: Deploy Backend on Render

1. Go to [https://render.com](https://render.com) and sign up
2. Click **New → Web Service**
3. Connect your GitHub repo
4. Configure:
   - **Name**: `mealtap-api`
   - **Root Directory**: `backend`
   - **Runtime**: Python
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn server:app --host 0.0.0.0 --port $PORT`
5. Add **Environment Variables**:
   - `MONGO_URL` = your MongoDB Atlas connection string from Step 1
   - `DB_NAME` = `mealtap_db`
   - `CORS_ORIGINS` = `https://your-site-name.netlify.app` (update after Netlify deploy)
6. Click **Create Web Service**
7. Note your backend URL (e.g., `https://mealtap-api.onrender.com`)

---

## STEP 3: Deploy Frontend on Netlify

1. Go to [https://app.netlify.com](https://app.netlify.com) and sign up
2. Click **Add new site → Import an existing project**
3. Connect your GitHub repo
4. Configure:
   - **Base directory**: `frontend`
   - **Build command**: `yarn build`
   - **Publish directory**: `frontend/build`
5. Add **Environment Variable**:
   - `REACT_APP_BACKEND_URL` = `https://mealtap-api.onrender.com` (your Render backend URL from Step 2)
6. Click **Deploy site**

### Netlify Forms
Your forms already have `data-netlify="true"` attributes. Once deployed on Netlify, form submissions will automatically appear in your **Netlify dashboard → Forms** section. They will ALSO be saved to MongoDB via your backend API.

---

## STEP 4: Update CORS on Render

After your Netlify site is live:
1. Go to Render dashboard → your service → Environment
2. Update `CORS_ORIGINS` to your Netlify URL: `https://your-site-name.netlify.app`
3. The service will auto-redeploy

---

## Files Created for Deployment

| File | Purpose |
|------|---------|
| `netlify.toml` | Netlify build config + SPA routing |
| `backend/render.yaml` | Render deployment config |
| `backend/requirements.deploy.txt` | Clean production dependencies (no dev tools) |
| `DEPLOY.md` | This guide |

---

## Custom Domain (Optional)

### Netlify:
1. Go to **Site settings → Domain management → Add custom domain**
2. Add `mealtap.com.ng` and follow DNS instructions

### Render:
1. Go to **Settings → Custom Domains**
2. Add `api.mealtap.com.ng` and follow DNS instructions

---

## Troubleshooting

- **CORS errors**: Make sure `CORS_ORIGINS` on Render matches your Netlify URL exactly
- **Forms not working on Netlify**: Ensure your HTML has `data-netlify="true"` and a hidden `form-name` input
- **Backend 503**: Render free tier spins down after 15 min of inactivity. First request may take ~30s
- **MongoDB connection fail**: Check your Atlas Network Access whitelist includes Render's IPs

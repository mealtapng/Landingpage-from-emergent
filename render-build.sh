#!/bin/bash
# Render build script - builds frontend and backend together

set -e

echo "=== Installing backend dependencies ==="
cd backend
pip install -r requirements.deploy.txt
cd ..

echo "=== Installing frontend dependencies ==="
cd frontend
yarn install
echo "=== Building React frontend ==="
REACT_APP_BACKEND_URL="" yarn build
cd ..

echo "=== Copying frontend build to backend/static ==="
rm -rf backend/static
cp -r frontend/build backend/static

echo "=== Build complete ==="

#!/bin/sh

# Build the backend
cd backend
npm run build

# Build the frontend
cd ..
cd frontend
npm run build
cd ..

# Copy all out dirs to dist/
cp -r frontend/out/ts/* dist/static/
cp -r frontend/src/html/* dist/static/
#cp -r frontend/src/js/* dist/static/
cp -r backend/out/ts/* dist/

# Cleanup
rm dist/*.d.ts
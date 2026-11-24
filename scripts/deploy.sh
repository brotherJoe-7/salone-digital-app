#!/usr/bin/env bash
# Rebuild the image and restart the container
set -e
docker build -t salone-digital:1.0 .
docker rm -f salone-app 2>/dev/null || true
docker run -d --name salone-app -p 127.0.0.1:8080:80 salone-digital:1.0
echo "Deployed. Open http://localhost:8080"

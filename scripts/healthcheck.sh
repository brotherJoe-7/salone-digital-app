#!/usr/bin/env bash
# Checks the container (8080) and host Nginx (80)
for url in http://localhost:8080/healthz http://localhost/healthz; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  echo "$url -> $code"
done

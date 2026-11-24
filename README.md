# Salone Digital Solutions - Local Deployment Project
DCOM304 Web Hosting & Design, Assignment 2 (Limkokwing University, Sierra Leone).

A multi-page static company website, containerised with Docker and served through an Nginx reverse proxy on Ubuntu.

## Structure
    site/        website (HTML, css/, js/, assets/)
    nginx/       container.conf (inside Docker) and salone-digital.conf (host reverse proxy)
    scripts/     deploy.sh, healthcheck.sh
    docs/        ARCHITECTURE, DEPLOYMENT, TESTING
    Dockerfile, docker-compose.yml, Makefile

## Quick start
    docker build -t salone-digital:1.0 .
    docker run -d --name salone-app -p 127.0.0.1:8080:80 salone-digital:1.0
    # open http://localhost:8080

See docs/DEPLOYMENT.md for the host Nginx steps.

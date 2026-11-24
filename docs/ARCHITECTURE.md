# Architecture
Browser -> Host Nginx (port 80, reverse proxy) -> Docker container (nginx:alpine, published on 127.0.0.1:8080) -> static site in /usr/share/nginx/html.

| Layer | Tool | Role |
|-------|------|------|
| Host OS | Ubuntu | Local deployment environment |
| Source control | Git + GitHub | Versioning and remote backup |
| Packaging | Docker | Reproducible container image |
| Web server | Nginx | Reverse proxy on the host, static server in the container |

The container port is bound to 127.0.0.1 so the site is only reachable through the host Nginx.

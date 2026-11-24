# Deployment guide
1. `git clone <repo-url>` and `cd salone-digital-app`
2. `docker build -t salone-digital:1.0 .`
3. `docker run -d --name salone-app -p 127.0.0.1:8080:80 salone-digital:1.0`
4. Check http://localhost:8080
5. Install Nginx, copy `nginx/salone-digital.conf` to `/etc/nginx/sites-available/salone-digital`, link it into `sites-enabled`, remove the `default` link
6. `sudo nginx -t && sudo systemctl reload nginx`
7. Check http://localhost

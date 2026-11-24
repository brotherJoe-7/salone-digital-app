# Test checklist
- [ ] `docker ps` shows salone-app as running (healthy)
- [ ] http://localhost:8080 loads the home page
- [ ] http://localhost loads the same page through host Nginx
- [ ] http://localhost/healthz returns OK
- [ ] Unknown URL shows the custom 404 page
- [ ] All five pages open from the menu; dark-mode toggle works; contact form validates

FROM nginx:alpine
LABEL maintainer="Joseph Nimneh" description="Salone Digital Solutions static site"
COPY nginx/container.conf /etc/nginx/conf.d/default.conf
COPY site/ /usr/share/nginx/html/
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://localhost/healthz || exit 1

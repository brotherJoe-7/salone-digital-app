IMAGE=salone-digital:1.0
build:
	docker build -t $(IMAGE) .
run:
	docker run -d --name salone-app -p 127.0.0.1:8080:80 $(IMAGE)
stop:
	docker rm -f salone-app
logs:
	docker logs salone-app
test:
	./scripts/healthcheck.sh

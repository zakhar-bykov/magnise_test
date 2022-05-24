build:
	docker build . -t magnise-test:latest

run:
	docker run -d -p 3000:3000 --env-file ./config/.env --rm --name magnise-test magnise-test:latest

stop:
	docker stop magnise-test

dev:
	make stop && make build && make run

build-app:
	docker build . -t magnise-test:latest


create-network:
	docker network create -d bridge magnise-test-net


run-app:
	docker run -d -p 3000:3000 --network magnise-test-net --env-file ./config/.env --rm --name magnise-test-app magnise-test:latest

stop-app:
	docker stop magnise-test-app


run-mongo:
	docker run --name magnise-test-mongo -d mongo --network magnise-test-net

stop-mongo:
	docker stop magnise-test-mongo


dev:
	make stop && make build && make run

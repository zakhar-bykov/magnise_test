# Magnise Test Task

## Install & build using make
clone app source
```
git clone https://github.com/zakhar-bykov/magnise_test.git

cd magnise_test

git checkout deploy
```

build container
```
make build-app
```

create network
```
make create-network
```

Start application
```
# ubuntu
docker compose up

# macos
docker-compose up
```

I tested it on my local machine so I hope it works for you. 🙂

The only thing I didn’t fully understand was how exactly it was necessary to integrate web sockets, so instead of them I put a stub. I think as for the test task this is not a problem.

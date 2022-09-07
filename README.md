# Project Name: Challenge bg
### Requirements
You must have installed docker and docker-compose in local machine

#### Clone and setup 'challenge-bg' repo
https://github.com/rjuaniquinaa/challenge-bg

copy `.env.example` file to `.env`
> Note: Edit values as needed

##### Start containers
You need run the dependencies into app container
```sh
docker-compose run --rm app npm i
```
Generate the containers if they not exist and leave the services started.
```sh
docker-compose up -d
```

##### Stop containers
Stop the containers
```sh
docker-compose stop
```

##### Container Logs
```sh
docker-compose logs -f --tail 100 {SERVICE_NAME}
```

##### Local endpoints
```sh
GET http://localhost:3001/persons


POST http://localhost:3001/vehicles
body: {
  "numberPlate": STRING,
	"brand": <Fiat|Peugeot|Audi|Jeep>,
  "nodel": STRING,
	"doors": NUMBER
}
```

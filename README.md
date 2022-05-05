# Sistema-aeroporto


## Step-by-step
```
docker-compose up
```

Wait mysql ready to connections.

```
npx sequelize-cli db:migrate
```

Wait finish all migrations.

```
yarn dev
```

Wait show port message.
Done!
Enter in [documentation](http://localhost:4000/doc)
Or import airport_postman.json in your postman


## Instalation
```
yarn install
```


## Run development mode
```
yarn dev
```


## Run production mode
```
yarn start
```


## Generate swagger documentation
```
yarn doc
```


## Migrations
```
npx sequelize-cli db:migrate
```


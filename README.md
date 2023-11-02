

## Description

Demo nestjs app with smtp4dev mail server.

## Installation

```bash
$ npm install

# make empty .env file from .env.example
cp .env.example .env
# now initialize the .env file
```

## Running the app

```bash

# run the smtp4dev server
$ docker compose up

# run the smtp4dev server in background
$ docker compose up -d

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

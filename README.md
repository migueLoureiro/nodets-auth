# Basic Node Typescript Express Mongo Auth

Basic Backend app with basic auth.
Using Node, Express, Typescript and Mongo.

## Running Locally

To install everything:
```
$ npm install express 
$ npm install -g typescript 
$ npm run build 
```

and then to run the app:
```
$ npm start
```

or using Makefile:
Install everything and run:
```
$ make
```
just to run:
```
$ make start
```

or using docker:
```
$ docker compose down
$ docker compose up
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

Cleanup deps problems:
```
$ make clean
```
or manually:
```
$ rm -rf ./dist ./node_modules
```

## Deploying to Heroku

Create or link an already existing repo:
```
$ heroku create
$ heroku git:remote -a app-name
```

Push to heroku
```
$ git push heroku main
$ heroku open
```

if for some reason the push fails with errors, or if the app insn't reachable.
Try heroku logs:
```
$ heroku logs -t
```

## Implementation detail

Details about implementation here.

Bootstrap/Boilerplate:
https://github.com/heroku/typescript-getting-started.git

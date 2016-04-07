# Application Template 
##### NodeJS, SenecaJS, AngularJS, Express


## Overview

This application is a template for the MEAN stack ( Mongo , Express , Angular , Node ) with backend senecaJS microservices. There are currently 2 branches in this project.

|Branch|Details|
|---|---|
|master|contains User service which uses mongoDB, so you will need to have monogoDB installed locally / remotely|
|BranchWithoutMongo | without the implementation of User service, can spin the app right away with Node and NPM |

<dl>
  <dt>Frontend </dt>
  <dd>EJS files with AngularJS, MVVM architecture.</dd>

  <dt>Webserver</dt>
  <dd>Most of the RESTful from frontends are being handled by Express webserver. Routings are being handled in here as well.</dd>
  
  <dt>Backend</dt>
  <dd>Backend is being handled by seneca microservices in this application, greet service and number service. The communication between seneca microservices are through tcp connections by defining <b>HOST</b> and <b>PORT</b> for seneca listeners and clients.</dd>
</dl>

## Getting started

### Prerequisite
1. Install [nodeJS 4.4.2 LTS](https://nodejs.org/en/)


### Running locally
1. Clone this repo
2. install node dependencies ``` bash installnpmpackages.sh ```
3. start the app,CMD ``` pm2 start ecosystem.json ```
4. app will be running on [localhost:3000](localhost:3000)

### Docker prerequisite 
1. Install [docker compose](https://docs.docker.com/compose/install/)

### docker-compose
1. Clone this repo
2. CD into /docker & CMD ``` docker-machine env ```
3. Check DOCKER_HOST with [env](https://github.com/thecitysecretltd/ApplicationTemplate/blob/master/docker/env#L1) file and make sure they match.
3. Run the command, eg. ```  eval $("C:\Program Files\Docker Toolbox\docker-machine.exe" env)```
4. Run docker compose, CMD ``` docker-compose up -d ```
3. The app will be running on DOCKER_HOST:3000

| Note |PROXY_HOST might need to be configured depending on what the DOCKER_HOST is.|
|---|---|

| Note | to check if docker is running, CMD ``` docker ps ``` and it will show you a list of running containers if exist|
|---|---|



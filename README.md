# Microservice
Approach to build microservice app using Docker

This project is an experiment and "learning material" for microservice application development. As an example, decided to build small blog web application.

Starting this project I had only basic understanding of microservices. This project is attempt to undersand and extend own knowledge about microservices, plus, in the end, to have a sketeleton project for creating microservice applications.

## TODO
**Stage 1.**
- [X] Which docker containers are needed
> Containers will be needed for such stuff as server, database, cache, que manager, gui, rest api, and etc. For more details go to [Docker containers and its images](#docker-containers-and-its-images) section.
- [X] Define structure of application
> Go to [Application structure](#application-structure) section to see application structure

**Stage 2.**
- [ ] Setup project

## Docker containers and its images
**Serving application**
* [NGINX](https://www.nginx.com/), [docker image](https://hub.docker.com/_/nginx)

NGINX will serve microservice application to the end-user.
* [NODEJS](https://nodejs.org/en/), [docker image](https://hub.docker.com/_/node/)

NODEJS will serve front part of application (Client-side GUI, Admin-side GUI)

**Storing data**
* [MySQL](https://www.mysql.com/), [docker image](https://hub.docker.com/_/mysql)

MySQL will be applications database that will store data separately for each application service

* [Redis](https://redis.io/), [docker image](https://hub.docker.com/_/redis)

Redis is cacheing mechanism for application

**Connection betwin services**
* [RabbitMQ](https://www.rabbitmq.com/), [docker image](https://hub.docker.com/_/rabbitmq)

RabbitMQ is message brocker that will provide communication between different services

## Application structure
![application structure](https://github.com/PauMin/micro-service/blob/master/application%20structure.png)

## Project setup
**1. Install Docker**

I used Ubuntu as OS for project setup, so I followed installation guide from dockers 
[documentation](https://docs.docker.com/install/linux/docker-ce/ubuntu/) for Linux

**2. Project data organisation**

To easily navigate inside project and prevent file mess, in future when project will grow, how to organise things
should be decided on this stage.

For my project I decided to organise file in next way:


## Helpfull links
* [The Geeky Platipus, Dockerise your PHP application with Nginx and PHP7-FPM](http://geekyplatypus.com/dockerise-your-php-application-with-nginx-and-php7-fpm/)
* [Bob Strecansky, How to Deploy Microservices with Docker](https://www.linode.com/docs/applications/containers/deploying-microservices-with-docker/)
* [Mina Ayoub, Microservices Authentication and Authorization Solutions](https://medium.com/tech-tajawal/microservice-authentication-and-authorization-solutions-e0e5e74b248a)
* [Docker Hub - List of docker images](https://hub.docker.com/search?q=&type=image)
* [All about microservices](https://microservices.io/)

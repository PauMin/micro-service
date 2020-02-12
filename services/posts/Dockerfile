FROM php:7.4-fpm

WORKDIR /usr/src/posts

RUN docker-php-ext-install sockets

CMD [ "php", "./index.php" ]
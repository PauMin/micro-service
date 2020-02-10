FROM php:7.1.3-fpm

COPY ./services/users /usr/src/users
COPY ./vendor /usr/src/users/vendor
WORKDIR /usr/src/users

RUN apt-get update && apt-get install -y libmcrypt-dev \
    mysql-client libmagickwand-dev --no-install-recommends \
    zip \
    unzip \
RUN docker-php-ext-install mcrypt pdo_mysql \
    && docker-php-ext-install sockets
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer require php-amqplib/php-amqplib

CMD [ "php", "./index.php" ]
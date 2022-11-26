FROM php:8.1-apache
FROM wordpress
RUN chown -R www-data:www-data /var/www/html
RUN apt-get update -y
RUN apt-get install nano
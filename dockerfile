FROM php:8.1-apache
FROM wordpress
RUN chown -R www-data:www-data /var/www/html
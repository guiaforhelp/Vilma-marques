FROM php:8.1-apache
FROM wordpress
RUN chown -R www-data:www-data /var/www/html
RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install nano -y
RUN touch /usr/local/etc/php/conf.d/uploads.ini \ && echo "upload_max_filesize = 512M;" >> /usr/local/etc/php/conf.d/uploads.ini
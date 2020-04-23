FROM php:7.2-apache

# Copy apache vhost file to proxy php requests to php-fpm container
COPY demo.apache.conf /usr/local/apache2/conf/demo.apache.conf

RUN a2enmod rewrite

RUN echo "Include /usr/local/apache2/conf/demo.apache.conf" \
    >> /usr/local/apache2/conf/httpd.conf

RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli
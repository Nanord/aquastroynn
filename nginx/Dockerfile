FROM nginx:latest

WORKDIR /

MAINTAINER Nanord nanord2@yandex.ru

RUN apt-get update

RUN mkdir /var/www
RUN mkdir /var/www/aquastroynn.ru
ADD ./web/ /var/www/aquastroynn.ru
ADD ./default /etc/nginx/sites-available/

RUN service nginx restart

EXPOSE 8080

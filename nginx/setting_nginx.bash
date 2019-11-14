#!/bin/bash
rm /etc/nginx/sites-available/default
cp ./default /etc/nginx/sites-available/
rm /etc/nginx/sites-enabled/default
ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/
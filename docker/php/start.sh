#!/bin/bash
nginx -g "daemon off;" &
php-fpm -R

tail -f /dev/null
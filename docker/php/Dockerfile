FROM centos:centos7

# install some module, extensions
RUN yum update -y && yum install -y \
        wget \
        git \
        httpd \
        zip \
        unzip \
        openssl mod_ssl

# remi repo install, and enable
RUN yum install -y http://rpms.famillecollet.com/enterprise/remi-release-7.rpm && \
    yum install -y yum-utils && \
    yum-config-manager --enable remi-php74

RUN yum -y install --enablerepo=remi,remi-php74 php php-fpm php-devel php-mbstring php-pdo php-gd php-xml php-mcrypt php-common php-mysqlnd php-pear php-pecl-xdebug

# composer install
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
ENV COMPOSER_ALLOW_SUPERUSER 1

# Generate ssl.crt(public) and ssl.key(private)
RUN cd /etc/ssl/certs \
    && openssl req -new -newkey rsa:4096 -days 3650 -nodes -x509 -subj "/CN=localhost" -keyout ./ssl.key -out ./ssl.crt

# set php configs
#COPY ./app/conf/php.ini /etc/php.ini
#COPY app /etc/php.ini
COPY ./xdebug.ini /etc/php.d/xdebug.ini
COPY ./httpd.conf /etc/httpd/conf/
COPY ./00-mpm.conf /etc/httpd/conf.modules.d/

EXPOSE 80 443

CMD ["/usr/sbin/httpd", "-DFOREGROUND"]

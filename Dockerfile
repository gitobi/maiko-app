FROM node:16.4.2-alpine

RUN apk update && \
    apk add --no-cache git \
    util-linux \
    autoconf \
    make \
    gcc \
    g++ \
    automake \
    libtool \
    vips-dev \
    pkgconf \
    nasm \
    python3 && \
    ln -s /usr/bin/python3 /usr/bin/python

WORKDIR /app

FROM node:14.15.3-alpine

RUN apk update && \
    apk add git util-linux autoconf make gcc g++ automake libtool pkgconf nasm

WORKDIR /app

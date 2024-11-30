FROM node:18.7.0

WORKDIR /usr/local/depenencies

COPY .yarnrc.yml .
COPY package.json .
COPY yarn.lock .

RUN yarn install

WORKDIR /usr/local/app

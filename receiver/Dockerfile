FROM node:12.9.0-buster-slim

WORKDIR /usr/app

COPY . .

RUN yarn install

EXPOSE 3002

CMD ["yarn", "dev"]
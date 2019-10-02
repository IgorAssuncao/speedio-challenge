FROM node:12.9.0-buster-slim

WORKDIR /usr/app

COPY . .

RUN yarn install

EXPOSE 3001

CMD ["yarn", "dev"]
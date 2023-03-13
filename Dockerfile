FROM node:18 as builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .

RUN yarn
RUN yarn build

FROM node:18-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app .

CMD ["yarn","start:prod"]
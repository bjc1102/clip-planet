FROM node:18 as builder

ENV DOCKERIZE_VERSION v0.2.0
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .

RUN yarn
RUN yarn build

FROM node:18-alpine

WORKDIR /usr/src/app
#빌더에서 만들어진 node_modulse, dist 가져오기
COPY --from=builder /usr/src/app .

RUN chmod +x docker-entrypoint.sh
ENTRYPOINT ./docker-entrypoint.sh

# CMD ["yarn","start:prod"]
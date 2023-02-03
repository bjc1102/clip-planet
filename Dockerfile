FROM node:18 as builder

WORKDIR /app

COPY . .

RUN yarn
RUN yarn build

FROM node:18-alpine

WORKDIR /app
#빌더에서 만들어진 node_modulse, dist 가져오기
COPY --from=builder /app ./
# Clip planet server

## Description
아침마다 여러 기술 블로그를 보면서 편하게 블로그 링크를 등록해놓거나 나중에 읽을 포스트들을 저장해놓을 수 있도록 웹클리퍼 기능을 지원하고 있습니다. <br/>
[노션 웹클리퍼 / Notion Web Clipper](https://www.notion.so/ko-kr/web-clipper) 해당 서비스를 참고하였습니다.

하지만 서비스보다 기술에 초점을 맞추고 구조를 잘못잡았다고 생각하여 임시 중단하기로 결정했고 이후 [KPT 회고를 통해 정리하였습니다](https://choiblog.tistory.com/158)

## Tech Stack
- Backend: Nest.js
- Database: MySQL, TypeORM
- Authentication: JSON Web Tokens (JWT), Google OAuth
- Deployment: Docker,Docker-compose ,Google Cloud Compute Engine. Nginx

## Issue
- [클라이언트에서 서버 초기 연결문제, http](https://choiblog.tistory.com/157)
- [Subdomain 이슈](https://choiblog.tistory.com/155)
- [웹,서버간 쿠키 저장 이슈](https://choiblog.tistory.com/154)
- [도커 컴포즈로 서버 구축 삽질기](https://choiblog.tistory.com/150)
- [도메인 연결](https://choiblog.tistory.com/148)
- [도커 띄우기](https://choiblog.tistory.com/147)
- [호스팅 삽질](https://choiblog.tistory.com/146)
- [Nest.js 코드 리팩토링](https://choiblog.tistory.com/156) <br/>
...

## Installation

```bash
$ git clone https://github.com/bjc1102/clipplanet-server.git
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode & Deploy
$ yarn build
$ yarn start:prod

# or 

$ docker-compose up
```

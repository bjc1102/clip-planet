# clip-planet

---

# Goal

자주 방문하는 기술 블로그들을 조금 더 간단하게 추가하고 확인할 수 있도록 관리하는 서비스를 개발해보고자 생각했습니다. 고민하고 조사해본 결과 [Notion Web Clipper](https://chrome.google.com/webstore/detail/notion-web-clipper/knheggckgoiihginacbkhaalnibhilkk?hl=ko), 크롬의 북마크와 같이 웹사이트 정보를 한 곳에 모아놔 쉽게 저장, 관리할 수 있도록 하는 방식이 좋을거같다고 생각했고 위와 같은 기능들을 참고하여 프로젝트를 진행하였습니다.

[서비스 주소](https://web.clip-planet.site/)

# Tech

- Typescript
- Client
  - NextJS
  - TailwindCSS
  - React-Query
- Server
  - NestJS
  - MySQL
  - TypeORM
- DevOps
  - Docker, Docker-Compose
  - Google Cloud platform
  - Nginx
  - Vercel

# Feature summary

- Chrome Extension을 통한 사이트 클립
  - [Extension API](https://developer.chrome.com/docs/extensions/reference/)를 통한 open graph 추출
  - API Key를 통한 서버와 연결
- Google OAuth를 통한 로그인
  - JWT을 통한 로그인 관리
- Web clip data CRUD
  - REST API를 통한 CRUD 구축
  - 보안, 가독성, 생산성을 위한 ORM 구축(TypeORM)
  - NestJS를 통한 구조화 및 Decorator, pipe, DTO 등 클린코드를 위한 표준화된 문서 참조
  - 함수형 프로그래밍 및 코드 리팩토링
- DevOps
  - 도커를 통한 배포환경 동기화
  - 서버, MySQL, NGINX 컨테이너 관리를 위한 도커 컴포즈 구축
  - 도메인 설정 및 GCE 구축

# Trouble shooting & Review

### Review

- [KPT 회고로 프로젝트 실패 회고하기](https://choiblog.tistory.com/158)
- [개인 프로젝트 진행사항 - TIL](https://choiblog.tistory.com/132)
- [개인 프로젝트 개발일지(2) - TIL](https://choiblog.tistory.com/131)
- [개인 프로젝트 개발일지(1) - TIL](https://choiblog.tistory.com/130)

### Trouble shooting

- [클라이언트에서 서버 초기 연결문제, http](https://choiblog.tistory.com/157)
- [Subdomain 설정 이슈](https://choiblog.tistory.com/155)
- [웹,서버간 쿠키 저장 이슈](https://choiblog.tistory.com/154)
- [도커 컴포즈로 서버 구축 삽질기](https://choiblog.tistory.com/150)
- [도메인 연결, Https 설정](https://choiblog.tistory.com/148)
- [도커 띄우기](https://choiblog.tistory.com/147)
- [웹 호스팅 삽질기](https://choiblog.tistory.com/146)
- [Nest.js 코드 리팩토링](https://choiblog.tistory.com/156)
- [도커 환경변수 설정이 안될때](https://choiblog.tistory.com/145)
- 배포할때 마주했던 간단한 이슈들
  - [컴파일을 위한 파일을 찾을 수 없음](https://choiblog.tistory.com/134)
  - [파일 경로 설정 문제](https://choiblog.tistory.com/133)
    <br/>

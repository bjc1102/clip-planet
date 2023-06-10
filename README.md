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

- 기술스택 도입에 대한 고민
- 개발 과정과 프로젝트 실패에 대한 회고
- Chrome Extension을 통한 사이트 클립
    - Custom한 Webpack 설정
    - [Extension API](https://developer.chrome.com/docs/extensions/reference/)를 통한 open graph 추출
    - Hook을 통한 서버 상태 관리
- Google OAuth를 통한 로그인 및 JWT을 통한 로그인 관리
- Web clip data CRUD
    - REST API를 통한 CRUD 구축
    - 보안, 가독성, 생산성을 위한 ORM 구축(TypeORM)
    - NestJS 구조화 및 Decorator, pipe, DTO 등 디자인 패턴 적용
    - 함수형 프로그래밍 및 코드 리팩토링
- DevOps
    - 도커를 통한 배포환경 동기화
    - 추가적인 컨테이너 관리를 위한 도커 컴포즈 구축
    - Custom한 NGINX 설정
    - DNS 설정 및 인스턴스 구축

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

# How to run
디렉토리 별 Readmme 참조

### Run Example

Login
![화면 기록 2023-04-30 오전 9 28 13](https://user-images.githubusercontent.com/71929440/235330036-111cea2c-28ea-46cb-a8fc-73e0ad3bf932.gif)

Clip
![화면 기록 2023-04-30 오전 9 13 08](https://user-images.githubusercontent.com/71929440/235330006-91943dc9-e9ce-4ebb-8b86-ca9e9e9592d7.gif)

Delete
![화면 기록 2023-04-30 오전 9 20 38](https://user-images.githubusercontent.com/71929440/235330008-98c9b7c8-9819-4e67-af33-ed06d38547d6.gif)

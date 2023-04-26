# Clip-planet-extension

## Summary
- api key를 통해 유저 정보 식별
- Chrome extension API를 활용하여 현재 chrome tab의 사이트 정보 추출
- 사이트 meta 데이터를 통한 사이트 정보 저장

## Description
방문한 블로그들을 조금 더 간단하게 추가하고 자주 방문할 수 있도록 관리하는 서비스를 개발해보고자 생각했습니다. Notion Web Clipper, 크롬의 북마크와 같이 웹사이트 정보를 저장, 관리할 수 있도록 하는 프로젝트의 크롬 확장도구입니다.

## 사용 이미지
<img width="364" alt="clip-planet2" src="https://user-images.githubusercontent.com/71929440/229493057-c0dfe2c3-544e-40ab-92a3-45eedeb97348.png">
<img width="364" alt="Snipaste_2023-03-30_20-39-26" src="https://user-images.githubusercontent.com/71929440/229493061-a177cf69-ce2d-403c-99ec-50f275b38807.png">


## Chrome Extension TypeScript Starter를 활용하였습니다.

[Boilerplate](https://github.com/chibat/chrome-extension-typescript-starter/workflows/build/badge.svg)

Chrome Extension, TypeScript and React

## Tech Stack

Boilerplate: chrome-extension-typescript-starter with React <br/>
CSS: SCSS <br/>
Bundling tool: Webpack <br/>

## Project Structure

* src/typescript: TypeScript source files
* src/assets: static files
* dist: Chrome Extension directory
* dist/js: Generated JavaScript files

## Setup

```
npm install
```

## Build

```
npm run build
```

## Build in watch mode

### terminal

```
npm run watch
```

### Visual Studio Code

Run watch mode.

type `Ctrl + Shift + B`

## Load extension to chrome

Load `dist` directory

## Test
`npx jest` or `npm run test`

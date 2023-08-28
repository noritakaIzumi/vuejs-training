# Developers memo

## Init repository

Init package.json

```shell
npm init -y
```

edit `package.json`

- author
- license

Pin node.js version via Volta

```shell
volta pin node@18.17.1
```

```text
success: pinned node@18.17.1 (with npm@9.6.7) in package.json
```

## Setup vue project

https://vuejs.org/guide/quick-start.html#creating-a-vue-application

```shell
npm create vue@latest
```

```text
Vue.js - The Progressive JavaScript Framework

✔ Current directory is not empty. Remove existing files and continue? … yes
✔ Package name: … vuejs-training
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit Testing? … No / Yes
✔ Add an End-to-End Testing Solution? › Playwright
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes

Scaffolding project in /home/noritaka-izumi/sources/vuejs-training...

Done. Now run:

  npm install
  npm run format
  npm run dev
```

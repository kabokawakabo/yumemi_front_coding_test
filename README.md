# yumemi_front_coding_test

## セットアップ

- npm create vite@latest
  - React、TypeScript（SWC ではない）を選択
- npm install --save-dev --save-exact prettier
- npm install --save-dev eslint-config-prettier
- npm install --save-dev husky lint-staged
- npm i recharts
- npm i @tanstack/react-query

## 参考

- prettier
  - セットアップ: https://prettier.io/docs/en/install.html
- husky
  - セットアップ: https://prettier.io/docs/en/install.html#git-hooks
  - eslint と prettier を同時に動かす: https://github.com/okonet/lint-staged#:~:text=In%20the%20following%20example
    - セットアップの URL 中より、eslint を先に表記する
    - **will consider**
      - eslint-config-prettier で　 eslint の rules を優先する処理(?)なのに、ここで prettier を後に実行(?)の書き方で良いのだろうか？
      - npx で eslint を実行するのは npm と違うのかも？

# yumemi_front_coding_test

## セットアップ

- npm create vite@latest
  - React、TypeScript（SWC ではない）を選択
- npm install --save-dev --save-exact prettier
- npm install --save-dev eslint-config-prettier
- npm install --save-dev husky lint-staged
- npm i recharts
- npm i @tanstack/react-query
- npx storybook@latest init
  - eslintPlugin を聞かれたので Y でインストール（eslint-plugin-storybook がインストールされた？）
- npm install @storybook/test-runner --save-dev
- npm install @storybook/testing-library @storybook/jest @storybook/addon-interactions --save-dev
  - storybook で interaction test を行う際必須
- npm install --save-dev @testing-library/react
  - hook テストで使用
    - https://github.com/testing-library/react-hooks-testing-library/issues/874
    - hooks-testing-library はマージされたらしい
- npm install --save-dev ts-jest

## 追加ファイル

```env:./.env.development
VITE_RESAS_API_TOKEN="自分のトークン"
```

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
- storybook
  - インストールなど：https://storybook.js.org/docs/react/get-started/install
  - テストの際、 `npm run storybook` を実行し、別ターミナルで `npm run test-storybook` を実行しないと全テスト自動チェックできない
- hook テスト
  - 参考：https://zenn.dev/longbridge/articles/9e9758181c8846
  - storybook を先にインストールしていたため、 npm では ts-jest のみインストールすれば良いっぽい?
- 環境
  - vite 環境変数：https://ja.vitejs.dev/guide/env-and-mode.html

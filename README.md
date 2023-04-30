# yumemi_front_coding_test

## テスト実行

### 「\*\*\*.test.ts」ファイル

```
npm run test
```

または

```
npm run test:watch
```

### 「\*\*\*.stories.ts」ファイル

1. stroybook 起動

```
npm run storybook
```

2. 別ターミナルを利用し、テスト実行

```
npm run test-storybook
```

---

## 追加必須ファイル

**./.env**

```
VITE_MY_ENV_RESAS_API_TOKEN="自分のRESAS APIトークン"
```

---

## セットアップ内容

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
  - `jest.config.json`中の `transform`部分で使用
- npm install --save-dev jest-environment-jsdom
  - Jest v28 以降なので追加必要
- npm i vite-plugin-env-compatible
  - 参考：https://qiita.com/diskszk/items/ed6362e35e15f2fd790e
    - test 環境で import.meta が使えないため

---

## 主要参考ページ

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
- hook テスト環境構築
  - 環境構築参考：https://zenn.dev/longbridge/articles/9e9758181c8846
    - storybook を先にインストールしていたため、 npm では ts-jest のみインストールすれば良いっぽい?
    - 一部、自分の環境で追記不要な設定があった（setup ファイルなど）
  - モック作成：
    - query 時: https://developer.mamezou-tech.com/testing/jest/jest-mock/
    - Math.random: https://qiita.com/shirotaro-jp/items/cba7d57584b201cff1c0
- ファイル階層
  - https://note.com/tabelog_frontend/n/n07b4077f5cf3

（その他、別途にコード中に記載）

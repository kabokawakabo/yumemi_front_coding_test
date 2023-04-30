//参考: https://ja.javascript.info/custom-errors
export class APIError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "apiエラー";
  }
}

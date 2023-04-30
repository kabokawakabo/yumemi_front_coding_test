//参考: https://ja.javascript.info/custom-errors
export class ColorCodeInPickerError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "colorCodeエラー in Picker";
  }
}

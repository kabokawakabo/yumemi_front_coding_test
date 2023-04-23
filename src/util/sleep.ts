// 参考: https://note.affi-sapo-sv.com/js-sleep.php
export const sleep = (waitTime: number) =>
  new Promise((resolve) => setTimeout(resolve, waitTime));

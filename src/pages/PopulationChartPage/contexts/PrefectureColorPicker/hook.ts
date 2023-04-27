import { useState, useEffect } from "react";

import type {
  getColorCodeFunc,
  setColorCodeFunc,
  PrefectureColorPickerObj,
} from "./type";
import { createRandomColorCode } from "../../../../util/createColorCode";

const useSetRandomColorCodeIfUndefined = (
  prefCodes: number[],
  id2Color: PrefectureColorPickerObj,
  setId2Color: (obj: PrefectureColorPickerObj) => void
) => {
  useEffect(() => {
    const new_obj: PrefectureColorPickerObj = {};
    for (const prefCode of prefCodes) {
      const alreadyOrRandom = id2Color[prefCode] ?? createRandomColorCode();
      new_obj[prefCode] = alreadyOrRandom;
    }

    const before_key_len = Object.keys(id2Color).length;
    const after_key_len = Object.keys(new_obj).length;
    const isDifferentBefore = before_key_len !== after_key_len;
    if (isDifferentBefore) setId2Color(new_obj);
  });
};

export const usePrefectureColorPickerData = (prefCodes: number[]) => {
  const [id2Color, setId2Color] = useState<PrefectureColorPickerObj>({});
  const getColorCodeFunc: getColorCodeFunc = (prefCode: number) =>
    id2Color[prefCode];
  const setColorCodeFunc: setColorCodeFunc = (
    prefCode: number,
    color_code: string
  ) => {
    setId2Color({
      ...id2Color,
      [prefCode]: color_code,
    });
  };

  useSetRandomColorCodeIfUndefined(prefCodes, id2Color, setId2Color);

  return {
    getColorCodeFunc,
    setColorCodeFunc,
  };
};

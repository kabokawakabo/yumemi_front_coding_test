import { useContext } from "react";
import { PrefectureColorPickerContext } from "./context";

export const useGetColorCodeFunc = () => {
  const { getColorCodeFunc } = useContext(PrefectureColorPickerContext);
  return getColorCodeFunc;
};

export const useSetColorCodeFunc = () => {
  const { setColorCodeFunc } = useContext(PrefectureColorPickerContext);
  return setColorCodeFunc;
};

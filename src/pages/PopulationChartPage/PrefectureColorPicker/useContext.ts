import { useContext } from "react";

import { PrefecturesContext } from "../_contexts/Prefectures/context";
import { PrefectureCheckboxContext } from "../_contexts/PrefectureCheckbox/context";
import { PrefectureColorPickerContext } from "../_contexts/PrefectureColorPicker/context";

export const useGetPrefecuteNameFunc = () => {
  const { getNameFromIdFunc } = useContext(PrefecturesContext);
  return getNameFromIdFunc;
};

export const useGetPrefCodeFunc = () => {
  const { getIdFromNameFunc } = useContext(PrefecturesContext);
  return getIdFromNameFunc;
};

export const useSelectedPrefCodes = () => {
  const { selected_ids } = useContext(PrefectureCheckboxContext);
  return selected_ids;
};

export const useGetColorCodeFunc = () => {
  const { getColorCodeFunc } = useContext(PrefectureColorPickerContext);
  return getColorCodeFunc;
};

export const useSetColorCodeFunc = () => {
  const { setColorCodeFunc } = useContext(PrefectureColorPickerContext);
  return setColorCodeFunc;
};

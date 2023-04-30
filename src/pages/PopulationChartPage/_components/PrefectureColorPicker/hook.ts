import type { LegendInfo } from "../../../../uiParts/LegendColorPickerList/type";
import { useSelectedPrefCodes } from "../../_contexts/PrefectureCheckbox/useContext";
import {
  useGetColorCodeFunc,
  useSetColorCodeFunc,
} from "../../_contexts/PrefectureColorPicker/useContext";
import {
  useGetNameFromIdFunc,
  useGetIdFromNameFunc,
} from "../../_contexts/Prefectures/useContext";

export const useLegendData = (): LegendInfo[] => {
  const prefCodes = useSelectedPrefCodes();
  const getColorCodeFunc = useGetColorCodeFunc();
  const getNameFromIdFunc = useGetNameFromIdFunc();

  return prefCodes.map((prefCode) => {
    const label = getNameFromIdFunc(prefCode) ?? "";
    const value = getColorCodeFunc(prefCode) ?? "#ffffff";
    return {
      label,
      value,
    };
  });
};

export const useSetColorCodeForLabelFunc = () => {
  const setColorCodeFunc = useSetColorCodeFunc();
  const getIdFromNameFunc = useGetIdFromNameFunc();

  return (label: string, color_code: string) => {
    const prefCode = getIdFromNameFunc(label);
    if (typeof prefCode === "number") setColorCodeFunc(prefCode, color_code);
  };
};

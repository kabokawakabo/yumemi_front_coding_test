import type { LegendInfo } from "../../../uiParts/LegendColorPickerList/type";
import {
  useGetColorCodeFunc,
  useGetPrefCodeFunc,
  useGetPrefecuteNameFunc,
  useSelectedPrefCodes,
  useSetColorCodeFunc,
} from "./useContext";

export const useLegendData = (): LegendInfo[] => {
  const prefCodes = useSelectedPrefCodes();
  const getColorCodeFunc = useGetColorCodeFunc();
  const getNameFunc = useGetPrefecuteNameFunc();

  return prefCodes.map((prefCode) => {
    const label = getNameFunc(prefCode) ?? "";
    const value = getColorCodeFunc(prefCode) ?? "#ffffff";
    return {
      label,
      value,
    };
  });
};

export const useSetColorCodeForLabelFunc = () => {
  const setColorCodeFunc = useSetColorCodeFunc();
  const getPrefCodeFunc = useGetPrefCodeFunc();

  return (label: string, color_code: string) => {
    const prefCode = getPrefCodeFunc(label);
    if (typeof prefCode === "number") setColorCodeFunc(prefCode, color_code);
  };
};

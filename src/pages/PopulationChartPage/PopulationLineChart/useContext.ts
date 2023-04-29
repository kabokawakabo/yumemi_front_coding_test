import { useContext } from "react";

import { PrefectureCheckboxContext } from "../_contexts/PrefectureCheckbox/context";
import { PopulationLabelContext } from "../_contexts/PopulationLabelSelect/context";
import { PrefectureColorPickerContext } from "../_contexts/PrefectureColorPicker/context";
import { PopulationCompositionContext } from "../_contexts/PopulationComposition/context";
import { PrefecturesContext } from "../_contexts/Prefectures/context";

export const useGetPrefectureNameFunc = () => {
  const { getNameFromIdFunc } = useContext(PrefecturesContext);
  return getNameFromIdFunc;
};

export const useSelectedPrefCodes = () => {
  const { selected_ids } = useContext(PrefectureCheckboxContext);
  return selected_ids;
};

export const useSelectedPopulationDataLabel = () => {
  const { label } = useContext(PopulationLabelContext);
  return label;
};

export const useGetColorCodeFunc = () => {
  const { getColorCodeFunc } = useContext(PrefectureColorPickerContext);
  return getColorCodeFunc;
};

export const useGetPopulationDataFunc = () => {
  const { getDataFromIdFunc } = useContext(PopulationCompositionContext);
  return getDataFromIdFunc;
};

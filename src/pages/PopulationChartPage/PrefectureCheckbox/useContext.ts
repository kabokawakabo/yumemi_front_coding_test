import { useContext } from "react";

import { PrefecturesContext } from "../_contexts/Prefectures/context";
import { PrefectureCheckboxContext } from "../_contexts/PrefectureCheckbox/context";

export const useAllPrefCodes = () => {
  const { all_prefCodes } = useContext(PrefecturesContext);
  return all_prefCodes;
};

export const useGetNameFromIdFunc = () => {
  const { getNameFromIdFunc } = useContext(PrefecturesContext);
  return getNameFromIdFunc;
};

export const useGetIdFromNameFunc = () => {
  const { getIdFromNameFunc } = useContext(PrefecturesContext);
  return getIdFromNameFunc;
};

export const useSelectedPrefCodes = () => {
  const { selected_ids } = useContext(PrefectureCheckboxContext);
  return selected_ids;
};

export const useAddOrRemovePrefCodeFunc = () => {
  const { addOrRemovePrefCode } = useContext(PrefectureCheckboxContext);
  return addOrRemovePrefCode;
};

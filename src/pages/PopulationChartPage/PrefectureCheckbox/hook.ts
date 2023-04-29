import {
  useAllPrefCodes,
  useGetNameFromIdFunc,
  useGetIdFromNameFunc,
} from "../_contexts/Prefectures/useContext";
import {
  useSelectedPrefCodes,
  useAddOrRemovePrefCodeFunc,
} from "../_contexts/PrefectureCheckbox/useContext";

export const useLabels = () => {
  const all_prefCodes = useAllPrefCodes();
  const getNameFromIdFunc = useGetNameFromIdFunc();

  return all_prefCodes.map((prefCode) => {
    return getNameFromIdFunc(prefCode) ?? "";
  });
};

export const useSelectedLabels = () => {
  const selected_ids = useSelectedPrefCodes();
  const getNameFromIdFunc = useGetNameFromIdFunc();

  return selected_ids.map((prefCode) => {
    return getNameFromIdFunc(prefCode) ?? "";
  });
};

export const useSetSelectedLabels = () => {
  const getIdFromNameFunc = useGetIdFromNameFunc();
  const addOrRemovePrefCode = useAddOrRemovePrefCodeFunc();

  return (label: string) => {
    const prefCode = getIdFromNameFunc(label);
    if (typeof prefCode === "number") addOrRemovePrefCode(prefCode);
  };
};

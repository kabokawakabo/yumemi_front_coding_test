import { useContext } from "react";

import { PrefectureCheckboxContext } from "./context";

export const useSelectedPrefCodes = () => {
  const { selected_ids } = useContext(PrefectureCheckboxContext);
  return selected_ids;
};

export const useAddOrRemovePrefCodeFunc = () => {
  const { addOrRemovePrefCode } = useContext(PrefectureCheckboxContext);
  return addOrRemovePrefCode;
};

import { useContext } from "react";

import { PrefecturesContext } from "./context";

export const useAllPrefCodes = () => {
  const { all_prefCodes } = useContext(PrefecturesContext);
  return all_prefCodes;
};

export const useGetIdFromNameFunc = () => {
  const { getIdFromNameFunc } = useContext(PrefecturesContext);
  return getIdFromNameFunc;
};

export const useGetNameFromIdFunc = () => {
  const { getNameFromIdFunc } = useContext(PrefecturesContext);
  return getNameFromIdFunc;
};

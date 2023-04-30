import { useContext } from "react";

import { PopulationCompositionContext } from "./context";

export const usePopulationLabels = () => {
  const { labels } = useContext(PopulationCompositionContext);
  return labels;
};

export const useGetDataFromIdFunc = () => {
  const { getDataFromIdFunc } = useContext(PopulationCompositionContext);
  return getDataFromIdFunc;
};

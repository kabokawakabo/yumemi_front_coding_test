import { useContext } from "react";

import { PopulationLabelContext } from "../_contexts/PopulationLabelSelect/context";
import { PopulationCompositionContext } from "../_contexts/PopulationComposition/context";

export const useSelectedLabel = () => {
  const { label } = useContext(PopulationLabelContext);
  return label;
};

export const useSetLabel = () => {
  const { setLabel } = useContext(PopulationLabelContext);
  return setLabel;
};

export const usePoupulationDataLabels = () => {
  const { labels } = useContext(PopulationCompositionContext);
  return labels;
};

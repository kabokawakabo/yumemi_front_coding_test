import { useContext } from "react";

import { PopulationLabelContext } from "./context";

export const useSelectedLabel = () => {
  const { label } = useContext(PopulationLabelContext);
  return label;
};

export const useSetSelectedLabel = () => {
  const { setLabel } = useContext(PopulationLabelContext);
  return setLabel;
};

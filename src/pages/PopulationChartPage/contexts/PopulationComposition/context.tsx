import { createContext } from "react";
import type { PopulationCompositionContextValue } from "./type";

const defaultValue: PopulationCompositionContextValue = {
  labels: [],
  getDataFromIdsFunc: () => [[]],
};
export const PopulationCompositionContext = createContext(defaultValue);

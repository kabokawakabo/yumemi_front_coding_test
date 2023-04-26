import { createContext } from "react";
import type { PopulationCompositionContextValue } from "./type";

const defaultValue: PopulationCompositionContextValue = {
  labels: [],
  getDataFromIds: () => [[]],
};
export const PopulationCompositionContext = createContext(defaultValue);

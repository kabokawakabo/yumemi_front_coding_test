import { createContext } from "react";
import type { ContextValue } from "./type";

const defaultValue: ContextValue = {
  labels: [],
  getDataFromIdsFunc: () => [[]],
};
export const PopulationCompositionContext = createContext(defaultValue);

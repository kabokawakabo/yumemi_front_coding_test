import { createContext } from "react";
import type { ContextValue } from "./type";

const defaultValue: ContextValue = {
  labels: [],
  getDataFromIdFunc: () => undefined,
};
export const PopulationCompositionContext = createContext(defaultValue);

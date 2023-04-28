import { createContext } from "react";
import type { ContextValue } from "./type";

const defaultValue: ContextValue = {
  label: undefined,
  setLabel: () => undefined,
};
export const PopulationLabelContext = createContext(defaultValue);

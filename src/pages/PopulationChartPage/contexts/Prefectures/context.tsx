import { createContext } from "react";
import type { ContextValue } from "./type";

const defaultValue: ContextValue = {
  getIdFromNameFunc: () => undefined,
  getNameFromIdFunc: () => undefined,
};
export const PrefecturesContext = createContext(defaultValue);

import { createContext } from "react";
import type { ContextValue } from "./type";

const defaultValue: ContextValue = {
  getColorCodeFunc: () => "",
  setColorCodeFunc: () => undefined,
};
export const PrefectureColorPickerContext = createContext(defaultValue);

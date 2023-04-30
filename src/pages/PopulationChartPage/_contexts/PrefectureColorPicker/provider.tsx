import type { ContextValue } from "./type";
import { PrefectureColorPickerContext } from "./context";
import { usePrefectureColorPickerData } from "./hook";

type PrefectureColorPickerProviderProps = {
  prefCodes: number[];
  children: React.ReactNode;
};
export const PrefectureColorPickerProvider: React.FC<
  PrefectureColorPickerProviderProps
> = ({ prefCodes, children }) => {
  const { getColorCodeFunc, setColorCodeFunc } =
    usePrefectureColorPickerData(prefCodes);

  const value: ContextValue = {
    getColorCodeFunc,
    setColorCodeFunc,
  };

  return (
    <PrefectureColorPickerContext.Provider value={value}>
      {children}
    </PrefectureColorPickerContext.Provider>
  );
};

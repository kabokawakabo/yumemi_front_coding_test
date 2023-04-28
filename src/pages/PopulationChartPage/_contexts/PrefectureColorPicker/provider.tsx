import type { ContextValue } from "./type";
import { PrefectureColorPickerContext } from "./context";
import { usePrefectureColorPickerData } from "./hook";

type PrefectureCompositionProviderProps = {
  prefCodes: number[];
  children: React.ReactNode;
};
export const PrefectureCompositionProvider: React.FC<
  PrefectureCompositionProviderProps
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

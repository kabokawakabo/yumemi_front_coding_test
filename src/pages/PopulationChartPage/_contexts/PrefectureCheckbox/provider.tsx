import type { ContextValue } from "./type";
import { PrefectureCheckboxContext } from "./context";
import { useSelectedIds } from "./hook";

type PopulationCompositionProviderProps = {
  children: React.ReactNode;
};
export const PopulationCompositionProvider: React.FC<
  PopulationCompositionProviderProps
> = ({ children }) => {
  const { selected_ids, addOrRemovePrefCode } = useSelectedIds();

  const value: ContextValue = {
    selected_ids,
    addOrRemovePrefCode,
  };

  return (
    <PrefectureCheckboxContext.Provider value={value}>
      {children}
    </PrefectureCheckboxContext.Provider>
  );
};

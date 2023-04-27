import type { ContextValue } from "./type.ts";
import { PopulationCompositionContext } from "./context";
import {
  usePopulationCompositionLabels,
  usePopulationCompositionData,
  useGetPopulationCompositionFromIdsFunc,
} from "./hook.ts";

type PopulationCompositionProviderProps = {
  prefCodes: number[];
  children: React.ReactNode;
};
export const PopulationCompositionProvider: React.FC<
  PopulationCompositionProviderProps
> = ({ prefCodes, children }) => {
  const populationComp = usePopulationCompositionData(prefCodes);
  const labels = usePopulationCompositionLabels(populationComp);
  const getDataFromIdsFunc =
    useGetPopulationCompositionFromIdsFunc(populationComp);

  const value: ContextValue = {
    labels,
    getDataFromIdsFunc,
  };

  return (
    <PopulationCompositionContext.Provider value={value}>
      {children}
    </PopulationCompositionContext.Provider>
  );
};

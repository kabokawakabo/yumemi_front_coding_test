import type { ContextValue } from "./type.ts";
import { PopulationCompositionContext } from "./context.tsx";
import {
  getPopulationCompositionLabels,
  usePopulationCompositionData,
  createGetPopulationCompositionFromIdFunc,
} from "./hook.ts";

type PopulationCompositionProviderProps = {
  prefCodes: number[];
  children: React.ReactNode;
};
export const PopulationCompositionProvider: React.FC<
  PopulationCompositionProviderProps
> = ({ prefCodes, children }) => {
  const populationComp = usePopulationCompositionData(prefCodes);
  const labels = getPopulationCompositionLabels(populationComp);
  const getDataFromIdFunc =
    createGetPopulationCompositionFromIdFunc(populationComp);

  const value: ContextValue = {
    labels,
    getDataFromIdFunc,
  };

  return (
    <PopulationCompositionContext.Provider value={value}>
      {children}
    </PopulationCompositionContext.Provider>
  );
};

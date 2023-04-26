import type {
  PopulationCompositionPerYear,
  YearPopulation,
} from "../../../../api/RESAS/populationComposition";

export type YearPopulationForLabel = {
  [label: string]: YearPopulation[];
};
export type PopulationCompositionObj = {
  [prefCode: number]: YearPopulationForLabel;
};
export type onSuccessFunc = (
  prefCode: number
) => (d: PopulationCompositionPerYear[]) => void;

export type PopulationCompositionContextValue = {
  labels: string[];
  getDataFromIds: (
    prefCodes: number[],
    label: string
  ) => (YearPopulation[] | undefined)[];
};

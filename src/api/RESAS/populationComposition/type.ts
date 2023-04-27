export type YearPopulation = {
  year: number;
  value: number;
  rate?: number;
};
export type PopulationCompositionPerYear = {
  label: string;
  data: YearPopulation[];
};

export type getPopulationPerYearProps = {
  prefCode: number;
  cityCode?: number; // undefinedで「すべての市区町村」を選択
  addArea?: string;
};

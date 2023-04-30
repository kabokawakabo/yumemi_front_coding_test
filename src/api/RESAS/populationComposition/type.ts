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
  cityCode?: number; // undefinedで「すべての市区町村」を選択する文字列に内部で変更
  addArea?: string;
};

import type { YearPopulation, PopulationCompositionPerYear } from "./type";

const MAX_POPULATION = 10 ** 9; // NOTE: 東京の2045年は8桁代だったため、この値が入るように
const DECIMAL_PLACE_RATE = 100;
export const LABELS = ["総人口", "年少人口", "生産年齢人口", "老年人口"];

const createRates = () => {
  const except_all = new Array(3).fill(0).map(Math.random);
  const rate_sum = except_all.reduce((st, d) => st + d, 0);
  const rates = except_all.map((d) => d / rate_sum);

  /// index:0 は総人口データ。rateは返らないのでundefined
  return [undefined, ...rates];
};

const createYearDataList = (
  years: number[],
  populations: number[],
  rate_with_undefined: undefined | number
): YearPopulation[] => {
  const data: YearPopulation[] = [];
  for (const i of years.keys()) {
    const year = years[i];
    const value = populations[i];
    const rate =
      rate_with_undefined === undefined
        ? undefined
        : Math.floor(DECIMAL_PLACE_RATE * value * rate_with_undefined) /
          DECIMAL_PLACE_RATE;
    data.push({
      year,
      value,
      rate,
    });
  }
  return data;
};

export const createMockData = (): PopulationCompositionPerYear[] => {
  const years = new Array(10).fill(1980).map((d, i) => d + i * 5);
  const populations = new Array(years.length)
    .fill(0)
    .map(() => Math.random() * MAX_POPULATION);
  const rates = createRates();

  const return_data: PopulationCompositionPerYear[] = [];
  for (const i of LABELS.keys()) {
    const label = LABELS[i];
    const rate = rates[i];
    const data = createYearDataList(years, populations, rate);
    return_data.push({
      label,
      data,
    });
  }

  return return_data;
};

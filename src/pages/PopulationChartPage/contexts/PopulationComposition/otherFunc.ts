import { createMockData } from "../../../../api/RESAS/mock/populationCompositon";
import type { PopulationCompositionPerYear } from "../../../../api/RESAS/populationComposition";
import type { YearPopulationForLabel, PopulationCompositionObj } from "./type";

export const createYearPopulationLabelKey = (
  data: PopulationCompositionPerYear[]
) => {
  const for_label_obj: YearPopulationForLabel = {};
  for (const { label, data: years_data } of data) {
    for_label_obj[label] = years_data;
  }
  return for_label_obj;
};

export const createStateFromIds = (prefCodes: number[]) => {
  const return_obj: PopulationCompositionObj = {};
  for (const prefCode of prefCodes) {
    const mock_data = createMockData();
    return_obj[prefCode] = createYearPopulationLabelKey(mock_data);
  }

  return return_obj;
};

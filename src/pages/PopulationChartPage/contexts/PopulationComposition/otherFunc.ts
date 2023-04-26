import type { PopulationCompositionPerYear } from "../../../../api/RESAS/populationComposition";
import type { YearPopulationForLabel } from "./type";

export const createYearPopulationLabelKey = (
  data: PopulationCompositionPerYear[]
) => {
  const for_label_obj: YearPopulationForLabel = {};
  for (const { label, data: years_data } of data) {
    for_label_obj[label] = years_data;
  }
  return for_label_obj;
};

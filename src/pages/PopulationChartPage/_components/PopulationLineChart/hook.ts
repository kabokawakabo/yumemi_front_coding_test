import type {
  LineChartDatum,
  LineInfo,
} from "../../../../uiParts/LineChart/type";
import { createRandomColorCode } from "../../../../util/colorCode";
import { useSelectedLabel as usePopulationSelectedLabel } from "../../_contexts/PopulationLabelSelect/useContext";
import { useGetNameFromIdFunc } from "../../_contexts/Prefectures/useContext";
import { useSelectedPrefCodes } from "../../_contexts/PrefectureCheckbox/useContext";
import { useGetDataFromIdFunc } from "../../_contexts/PopulationComposition/useContext";
import { useGetColorCodeFunc } from "../../_contexts/PrefectureColorPicker/useContext";

export const useSelectedLabel = () => {
  return usePopulationSelectedLabel();
};

export const useChartData = (label: string | undefined): LineChartDatum[] => {
  const prefCodes = useSelectedPrefCodes();
  const getDataFromIdFunc = useGetDataFromIdFunc();

  const chart_data: LineChartDatum[] = [];
  for (const prefCode of prefCodes) {
    const data = getDataFromIdFunc(prefCode, label ?? "");
    if (typeof data === "undefined") continue;

    for (const i of data.keys()) {
      const { year, value: population } = data[i];
      const new_population_obj = {
        name: year,
        [prefCode]: population,
      };
      const previous_chart_data = chart_data[i];

      if (previous_chart_data === undefined)
        chart_data.push(new_population_obj);
      else chart_data[i] = { ...previous_chart_data, ...new_population_obj };
    }
  }

  return chart_data;
};

export const useLineData = (): LineInfo[] => {
  const prefCodes = useSelectedPrefCodes();
  const getColorCodeFunc = useGetColorCodeFunc();
  const getNameFromIdFunc = useGetNameFromIdFunc();

  return prefCodes.map((prefCode) => {
    const stroke = getColorCodeFunc(prefCode) ?? createRandomColorCode();
    const name = getNameFromIdFunc(prefCode);

    return {
      dataKey: prefCode,
      stroke,
      name,
    };
  });
};

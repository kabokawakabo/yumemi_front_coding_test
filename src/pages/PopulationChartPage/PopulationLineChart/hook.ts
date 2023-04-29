import type { LineChartDatum, LineInfo } from "../../../uiParts/LineChart/type";
import { createRandomColorCode } from "../../../util/colorCode";
import {
  useGetColorCodeFunc,
  useGetPopulationDataFunc,
  useGetPrefectureNameFunc,
  useSelectedPrefCodes,
} from "./useContext";

export const useChartData = (label: string | undefined): LineChartDatum[] => {
  const prefCodes = useSelectedPrefCodes();
  const getDataFromIdFunc = useGetPopulationDataFunc();

  const chart_data: LineChartDatum[] = [];
  for (const prefCode of prefCodes) {
    const data = getDataFromIdFunc(prefCode, label ?? "");
    if (typeof data === "undefined") continue;

    for (const i of data.keys()) {
      const { year, value: population } = data[i];
      const previous_chart_data = chart_data[i] ?? {};

      chart_data.push({
        ...previous_chart_data,
        name: year,
        [prefCode]: population,
      });
    }
  }

  return chart_data;
};

export const useLineData = (): LineInfo[] => {
  const prefCodes = useSelectedPrefCodes();
  const getColorCodeFunc = useGetColorCodeFunc();
  const getNameFromIdFunc = useGetPrefectureNameFunc();

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

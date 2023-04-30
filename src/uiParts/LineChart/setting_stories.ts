import { MAX_POPULATION } from "../../api/RESAS/populationComposition/mock";
import { LineChartDatum } from "./type";

export const createLineData = (linkKeys: string[]) => {
  const names = new Array(5).fill(2000).map((d, i) => d + i * 5);

  const lineData: LineChartDatum[] = [];
  for (const name of names) {
    const obj: LineChartDatum = { name };
    for (const linkKey of linkKeys) {
      obj[linkKey] = Math.floor(Math.random() * MAX_POPULATION);
    }

    lineData.push(obj);
  }
  return lineData;
};

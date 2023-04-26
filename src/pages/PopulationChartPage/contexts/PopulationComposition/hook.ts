import { useState } from "react";

import type {
  YearPopulationForLabel,
  PopulationCompositionObj,
  onSuccessFunc,
} from "./type";
import type { PopulationCompositionPerYear } from "../../../../api/RESAS/populationComposition";
import { useGetPopulationPerYear } from "./query";

const useOnSuccess = (
  populationComp: PopulationCompositionObj,
  setPopulationComp: (d: PopulationCompositionObj) => void
): onSuccessFunc => {
  return (prefCode) => {
    return (data: PopulationCompositionPerYear[]) => {
      /// 既に追加済みのデータの場合は更新しない
      if (populationComp[prefCode] !== undefined) return;

      const for_label_obj: YearPopulationForLabel = {};
      for (const { label, data: years_data } of data) {
        for_label_obj[label] = years_data;
      }

      setPopulationComp({
        ...populationComp,
        [prefCode]: for_label_obj,
      });
    };
  };
};

export const usePopulationCompositionData = (prefCodes: number[]) => {
  const [populationComp, setPolulationComp] =
    useState<PopulationCompositionObj>({});
  const onSuccessFunc = useOnSuccess(populationComp, setPolulationComp);

  useGetPopulationPerYear(prefCodes, onSuccessFunc);

  return populationComp;
};

export const usePopulationCompositionLabels = (
  populationComp: PopulationCompositionObj
) => {
  /// どれかの県データに含まれる、人口構成データのラベル（総人口 など）を取り出す
  for (const popululationData of Object.values(populationComp)) {
    return Object.keys(popululationData);
  }

  return [];
};

export const useGetPopulationCompositionFromIds = (
  populationComp: PopulationCompositionObj
) => {
  return (prefCodes: number[], label: string) => {
    return prefCodes.map((prefCode) => {
      const data_of_prefCode = populationComp[prefCode];
      if (data_of_prefCode === undefined) return undefined;

      return data_of_prefCode[label];
    });
  };
};

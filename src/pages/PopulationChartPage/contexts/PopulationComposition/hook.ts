import { useState } from "react";

import type {
  PopulationCompositionObj,
  getDataFromIdFunc,
  onSuccessFunc,
} from "./type";
import type { PopulationCompositionPerYear } from "../../../../api/RESAS/populationComposition";
import { useGetPopulationPerYear } from "./query";
import { createYearPopulationLabelKey } from "./otherFunc";

const createOnSuccessFunc = (
  populationComp: PopulationCompositionObj,
  setPopulationComp: (d: PopulationCompositionObj) => void
): onSuccessFunc => {
  return (prefCode) => {
    return (data: PopulationCompositionPerYear[]) => {
      /// 既に追加済みのデータの場合は更新しない
      if (populationComp[prefCode] !== undefined) return;

      const for_label_obj = createYearPopulationLabelKey(data);
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
  const onSuccessFunc = createOnSuccessFunc(populationComp, setPolulationComp);

  useGetPopulationPerYear(prefCodes, onSuccessFunc);

  return populationComp;
};

export const getPopulationCompositionLabels = (
  populationComp: PopulationCompositionObj
) => {
  /// どれかの県データに含まれる、人口構成データのラベル（総人口 など）を取り出す
  for (const popululationData of Object.values(populationComp)) {
    return Object.keys(popululationData);
  }

  return undefined;
};

export const createGetPopulationCompositionFromIdFunc = (
  populationComp: PopulationCompositionObj
): getDataFromIdFunc => {
  return (prefCode, label) => {
    const data_of_prefCode = populationComp[prefCode];
    if (data_of_prefCode === undefined) return undefined;

    return data_of_prefCode[label];
  };
};

import { useGetPopulationPerYear } from "./query";
import { createMockData } from "../../../../api/RESAS/populationComposition/mock";
import type { PopulationCompositionPerYear } from "../../../../api/RESAS/populationComposition/type";
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

const createMockQueryFunc = (): useGetPopulationPerYear => {
  return (prefCodes, onSuccessFunc) => {
    /// NOTE: keyが存在する場合はstate更新しないので1度の更新で止まる（無限ループにならない）
    prefCodes.map((prefCode) => {
      const onSuccess = onSuccessFunc(prefCode);
      const mockData = createMockData();
      onSuccess(mockData);
    });
  };
};

/**
 * NOTE: 関数呼び出しと同時に、テストファイルに `jest.mock(Prefectures/query.tsのパス)` を記述する必要あり
 * （同じファイルの方が相対パスがわかりやすいが、モック成立するためには別ファイルのimportが必須。他の方法があるかもしれない。）
 */
export const createMockQuery = () => {
  const mock = useGetPopulationPerYear as jest.MockedFunction<
    typeof useGetPopulationPerYear
  >;
  mock.mockImplementation(createMockQueryFunc());
};

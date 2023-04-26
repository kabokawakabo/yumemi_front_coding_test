import { renderHook } from "@testing-library/react";

import {
  usePopulationCompositionData,
  usePopulationCompositionLabels,
  useGetPopulationCompositionFromIds,
} from "./hook.ts";

import {
  LABELS,
  createMockData,
} from "../../../../api/RESAS/mock/populationCompositon.ts";
import { useGetPopulationPerYear } from "./query.ts";
jest.mock("./query.ts");

describe("contextテスト、PopulationComposition Hook", () => {
  beforeEach(() => {
    /// データ整形後のobjデータを使って以降の操作をするため、各実行前にモックを定義
    const mock = useGetPopulationPerYear as jest.MockedFunction<
      typeof useGetPopulationPerYear
    >;
    mock.mockImplementation((prefCodes, onSuccessFunc) => {
      /// NOTE: keyが存在する場合はstate更新しないので1度の更新で止まる（無限ループにならない）
      prefCodes.map((prefCode) => {
        const onSuccess = onSuccessFunc(prefCode);
        const mockData = createMockData();
        onSuccess(mockData);
      });
    });
  });

  test("usePopulationCompositionData| state変更時 データが追加されるかテスト", () => {
    const { result, rerender } = renderHook(
      (props) => usePopulationCompositionData(props),
      {
        initialProps: [1, 2, 3, 4],
      }
    );

    const new_prefCodes = [2, 5];
    rerender(new_prefCodes);
    const { result: result_from_ids_data } = renderHook(() =>
      useGetPopulationCompositionFromIds(result.current)
    );
    const fromIdsFunc = result_from_ids_data.current;
    for (const label of LABELS) {
      const data_list = fromIdsFunc(new_prefCodes, label);
      for (const data of data_list) {
        expect(data).not.toBe(undefined);
      }
    }
  });

  test("usePopulationCompositionLabels| データにあるラベルを取り出せるかテスト", () => {
    const { result } = renderHook(
      (props) => usePopulationCompositionData(props),
      {
        initialProps: [1, 2, 3, 4],
      }
    );
    const { result: result_label } = renderHook(() =>
      usePopulationCompositionLabels(result.current)
    );

    for (const i of LABELS.keys()) {
      const true_label = LABELS[i];
      const real_value = result_label.current[i];
      expect(real_value).toBe(true_label);
    }
  });

  test("useGetPopulationCompositionFromIds| 作成していないIDを調べた際　undefinedを返すかテスト", () => {
    const initial_prefCodes = [1, 2, 3, 4];
    const initial_prefCodes_set = new Set(initial_prefCodes);
    const { result } = renderHook(
      (props) => usePopulationCompositionData(props),
      {
        initialProps: initial_prefCodes,
      }
    );

    const new_prefCodes = [2, 5];
    const { result: result_from_ids_data } = renderHook(() =>
      useGetPopulationCompositionFromIds(result.current)
    );
    const fromIdsFunc = result_from_ids_data.current;
    const data_list = fromIdsFunc(new_prefCodes, LABELS[0]);
    for (const i of new_prefCodes) {
      const prefCode = new_prefCodes[i];
      const value = data_list[i];

      const expect_value = expect(value);
      if (initial_prefCodes_set.has(prefCode)) expect_value.not.toBe(undefined);
      else expect_value.toBe(undefined);
    }
  });
});

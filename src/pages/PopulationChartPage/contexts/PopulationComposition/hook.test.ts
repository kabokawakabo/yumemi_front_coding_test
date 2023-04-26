import { renderHook } from "@testing-library/react";

import {
  usePopulationCompositionData,
  usePopulationCompositionLabels,
  useGetPopulationCompositionFromIdsFunc,
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
    const initial_prefCodes = [1, 2, 3, 4];
    const new_prefCodes = [2, 5];
    const { result, rerender } = renderHook(
      (props) => usePopulationCompositionData(props),
      {
        initialProps: initial_prefCodes,
      }
    );

    rerender(new_prefCodes);
    const data_obj = result.current;
    const all_prefCodes = [
      ...new Set([...initial_prefCodes, ...new_prefCodes]),
    ];
    for (const prefCode of all_prefCodes) {
      for (const label of LABELS) {
        const data = data_obj[prefCode][label];
        expect(data).not.toBe(undefined);
      }
    }
  });

  test("usePopulationCompositionLabels| データ初期値ではラベルを取り出さずundefinedを返すかテスト", () => {
    const { result: result_labels } = renderHook(() =>
      usePopulationCompositionLabels({})
    );

    const labels = result_labels.current;
    expect(labels).toBe(undefined);
  });

  test("usePopulationCompositionLabels| データにあるラベルを取り出せるかテスト", () => {
    const { result } = renderHook(
      (props) => usePopulationCompositionData(props),
      {
        initialProps: [1, 2, 3, 4],
      }
    );
    const { result: result_labels } = renderHook(() =>
      usePopulationCompositionLabels(result.current)
    );

    const labels = result_labels.current;
    expect(labels).not.toBe(undefined);

    for (const i of LABELS.keys()) {
      const true_label = LABELS[i];
      const real_value = labels === undefined ? undefined : labels[i];
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
    const { result: result_fromIdsFunc } = renderHook(() =>
      useGetPopulationCompositionFromIdsFunc(result.current)
    );
    const fromIdsFunc = result_fromIdsFunc.current;
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

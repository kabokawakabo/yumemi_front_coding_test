import { renderHook } from "@testing-library/react";

import {
  usePopulationCompositionData,
  getPopulationCompositionLabels,
  createGetPopulationCompositionFromIdFunc,
} from "./hook.ts";

import { LABELS } from "../../../../api/RESAS/mock/populationCompositon.ts";
import { createStateFromIds, createMockQuery } from "./mock.ts";
jest.mock("./query.ts");

describe("contextテスト、PopulationComposition Hook", () => {
  test("usePopulationCompositionData| state変更時 データが追加されるかテスト", () => {
    createMockQuery();

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

  test("getPopulationCompositionLabels| データ初期値ではラベルを取り出さずundefinedを返すかテスト", () => {
    const labels = getPopulationCompositionLabels({});
    expect(labels).toBe(undefined);
  });

  test("getPopulationCompositionLabels| データにあるラベルを取り出せるかテスト", () => {
    const state = createStateFromIds([1, 2, 3, 4]);
    const labels = getPopulationCompositionLabels(state);
    expect(labels).not.toBe(undefined);

    for (const i of LABELS.keys()) {
      const true_label = LABELS[i];
      const real_value = labels === undefined ? undefined : labels[i];
      expect(real_value).toBe(true_label);
    }
  });

  test("createGetPopulationCompositionFromIdFunc| 作成していないIDを調べた際　undefinedを返すかテスト", () => {
    const initial_prefCodes = [1, 2, 3, 4];
    const new_prefCodes = [2, 5];
    const initial_prefCodes_set = new Set(initial_prefCodes);
    const state = createStateFromIds(initial_prefCodes);

    const getDataFromIdFunc = createGetPopulationCompositionFromIdFunc(state);
    for (const i of new_prefCodes) {
      const prefCode = new_prefCodes[i];
      const value = getDataFromIdFunc(prefCode, LABELS[0]);

      const expect_value = expect(value);
      if (initial_prefCodes_set.has(prefCode)) expect_value.not.toBe(undefined);
      else expect_value.toBe(undefined);
    }
  });
});

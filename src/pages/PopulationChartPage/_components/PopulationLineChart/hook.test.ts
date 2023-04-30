import { renderHook } from "@testing-library/react";

import { useChartData } from "./hook.ts";

import { LABELS } from "../../../../api/RESAS/populationComposition/mock.ts";
import { createStateFromIds } from "../../_contexts/PopulationComposition/mock.ts";

import { useSelectedPrefCodes } from "../../_contexts/PrefectureCheckbox/useContext.ts";
import { useGetDataFromIdFunc } from "../../_contexts/PopulationComposition/useContext.ts";
jest.mock("../../_contexts/PrefectureCheckbox/useContext.ts");
jest.mock("../../_contexts/PopulationComposition/useContext");

const PREF_CODES = [1, 3, 4];
const POPULATION_STATE = createStateFromIds(PREF_CODES);

const createMock_useSelectedPrefCodes = () => {
  const mock = useSelectedPrefCodes as jest.MockedFunction<
    typeof useSelectedPrefCodes
  >;
  mock.mockImplementation(() => PREF_CODES);
};
const createMock_useDataFromIdFunc = () => {
  const mockFunc = (prefCode: number, label: string) => {
    return POPULATION_STATE[prefCode][label];
  };

  const mock = useGetDataFromIdFunc as jest.MockedFunction<
    typeof useGetDataFromIdFunc
  >;
  mock.mockImplementation(() => mockFunc);
};

describe("PopulationLineChartコンポーネント in PopulationChartPage", () => {
  test("useChartData| prefCodeから各年の人口を参照可能なobjリストを作成できるかテスト", () => {
    createMock_useDataFromIdFunc();
    createMock_useSelectedPrefCodes();

    const label = LABELS[0];
    const { result } = renderHook(() => useChartData(label));

    for (const line_chart_data of result.current) {
      for (const prefCode of PREF_CODES) {
        const value = line_chart_data[prefCode];
        expect(value).not.toBe(undefined);
      }
    }
  });
});

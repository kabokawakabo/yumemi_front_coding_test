import { APIError } from "../APIError";
import { ENDPOINT, RESAS_Response, TOKEN } from "./_settings";

type YearPopulation = {
  year: number;
  value: number;
  rate?: number;
};
export type PopulationCompositionPerYear = {
  label: string;
  data: YearPopulation[];
};
type Response = {
  result?: {
    boundaryYear: number;
    data: PopulationCompositionPerYear[];
  };
} & RESAS_Response;

type getPopulationPerYearProps = {
  prefCode: number;
  cityCode?: number; // undefinedで「すべての市区町村」を選択
  addArea?: string;
};
const getParams = (props: getPopulationPerYearProps) => {
  const { prefCode, cityCode, addArea } = props;

  const params = `?prefCode=${prefCode}&cityCode=${cityCode ?? "-"}`;
  if (addArea === undefined) return params;

  return params + `&addArea=${addArea}`;
};

/**
 * 人口構成 データ取得
 * https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html
 */
export const getPopulationPerYear = async (
  props: getPopulationPerYearProps
) => {
  const params = getParams(props);
  const response = await fetch(
    `${ENDPOINT}/api/v1/population/composition/perYear${params}`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": TOKEN,
      },
    }
  );

  const data: Response = await response.json();

  /// NOTE: エラー発生時はresultを絶対返さないっぽいので（https://opendata.resas-portal.go.jp/docs/api/v1/detail/index.html）
  if (data.result === undefined)
    throw new APIError("都道府県データ　APIエラー");
  return data.result.data;
};

import { APIError } from "../../util/error/APIError";
import { ENDPOINT, RESAS_Response, TOKEN } from "./_settings";

export type Prefecture = {
  prefCode: number;
  prefName: string;
};
type Response = {
  result?: Prefecture[];
} & RESAS_Response;

/**
 * 都道府県一覧 データ取得
 * https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
 */
export const getPrefectures = async () => {
  const response = await fetch(`${ENDPOINT}/api/v1/prefectures`, {
    method: "GET",
    headers: {
      "X-API-KEY": TOKEN,
    },
  });

  const data: Response = await response.json();

  /// NOTE: エラー発生時はresultを絶対返さないっぽいので（https://opendata.resas-portal.go.jp/docs/api/v1/detail/index.html）
  if (data.result === undefined)
    throw new APIError("都道府県データ　APIエラー");
  return data.result;
};

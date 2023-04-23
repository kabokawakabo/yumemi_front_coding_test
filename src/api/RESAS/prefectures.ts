import { APIError } from "../APIError";

export type Prefecture = {
  prefCode: number;
  prefName: string;
};
type Response = {
  statusCode?: string;
  description?: string;
  message: string | null;
  result?: Prefecture[];
};

export const getPrefectures = async () => {
  const response = await fetch(
    "https://opendata.resas-portal.go.jp/api/v1/prefectures",
    {
      method: "GET",
      headers: {
        "X-API-KEY": import.meta.env.VITE_RESAS_API_TOKEN,
      },
    }
  );

  const data: Response = await response.json();

  /// NOTE: エラー発生時はresultを絶対返さないっぽいので（https://opendata.resas-portal.go.jp/docs/api/v1/detail/index.html）
  if (data.result === undefined)
    throw new APIError("都道府県データ　APIエラー");
  return data.result;
};

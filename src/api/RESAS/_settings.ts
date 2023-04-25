export const ENDPOINT = "https://opendata.resas-portal.go.jp";
export const TOKEN = process.env.VITE_RESAS_API_TOKEN ?? "";

export type RESAS_Response = {
  statusCode?: string;
  description?: string;
  message: string | null;
};

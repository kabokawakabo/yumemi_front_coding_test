import { Line } from "recharts";
import { LineInfo } from "./type";

export const createLine: React.FC<LineInfo> = ({ dataKey, stroke, name }) => {
  /// WARNING: dataKeyが関数の場合、keyがユニークにならない可能性がある
  const key = typeof dataKey === "function" ? name ?? stroke : dataKey;
  return (
    <Line
      key={key}
      type="monotone"
      dataKey={dataKey}
      stroke={stroke}
      name={name}
    />
  );
};

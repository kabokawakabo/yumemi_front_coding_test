import { Line } from "recharts";
import { LineInfo } from "./type";

export const createLine: React.FC<LineInfo> = ({ dataKey, stroke, name }) => {
  return <Line type="monotone" dataKey={dataKey} stroke={stroke} name={name} />;
};

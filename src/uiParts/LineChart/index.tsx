import {
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { createLine } from "./Line";
import { LineInfo, LineChartDatum } from "./type";

type LineChartProps = {
  height: number;
  data: LineChartDatum[];
  lineData: LineInfo[];
  hasTooltip?: boolean;
  title?: string; // テスト用
};
export const LineChart: React.FC<LineChartProps> = ({
  height,
  data,
  lineData,
  hasTooltip,
  title,
}) => {
  const Lines = lineData.map((d) => createLine(d));

  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsLineChart
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 20 }}
        title={title}
      >
        {Lines}
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        {hasTooltip && <Tooltip />}
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

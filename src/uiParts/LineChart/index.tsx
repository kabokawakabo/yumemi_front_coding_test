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
import {
  addIntRankSuffixWithSignificantDigit,
  addIntUSRankSuffix,
} from "./util";

type LineChartProps = {
  height: number | string;
  xLabel?: number | string;
  yLabel?: number | string;
  data: LineChartDatum[];
  lineData: LineInfo[];
  hasTooltip?: boolean;
  title?: string; // テスト用
};
export const LineChart: React.FC<LineChartProps> = ({
  height,
  xLabel,
  yLabel,
  data,
  lineData,
  hasTooltip,
  title,
}) => {
  const Lines = lineData.map((d) => createLine(d));
  function yAxisFormatter<T>(value: T) {
    if (typeof value === "number")
      return addIntRankSuffixWithSignificantDigit(value, 2);
    return value;
  }
  function tooltipFormatter<T>(v: T) {
    if (typeof v === "number") return addIntUSRankSuffix(v);
    return v;
  }

  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsLineChart
        data={data}
        margin={{ top: 35, right: 10, bottom: 20, left: 15 }}
        title={title}
      >
        {Lines}
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis
          dataKey="name"
          label={{ value: xLabel, position: "insideBottomRight", dy: 12 }}
        />
        <YAxis
          tickFormatter={yAxisFormatter}
          label={{ value: yLabel, position: "insideTopLeft", dy: -35 }}
        />
        {hasTooltip && <Tooltip formatter={tooltipFormatter} />}
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

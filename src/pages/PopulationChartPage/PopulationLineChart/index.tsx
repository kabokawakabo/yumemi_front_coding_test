import { LineChart } from "../../../uiParts/LineChart";
import { useSelectedLabel, useChartData, useLineData } from "./hook";

type PopulationLineChartProps = {
  style?: React.CSSProperties;
};
export const PopulationLineChart: React.FC<PopulationLineChartProps> = ({
  style,
}) => {
  const label = useSelectedLabel();
  const chart_data = useChartData(label);
  const line_data = useLineData();

  return (
    <div style={style}>
      <LineChart
        data={chart_data}
        lineData={line_data}
        xLabel="年度"
        yLabel={label}
        height={400}
        hasTooltip
      />
    </div>
  );
};

import { LineChart } from "../../../uiParts/LineChart";
import { useSelectedLabel, useChartData, useLineData } from "./hook";

export const PopulationLineChart: React.FC = () => {
  const label = useSelectedLabel();
  const chart_data = useChartData(label);
  const line_data = useLineData();

  return (
    <div>
      <LineChart
        data={chart_data}
        lineData={line_data}
        xLabel="年度"
        height={400}
        hasTooltip
      />
    </div>
  );
};

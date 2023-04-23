export type LineChartDatum = {
  name: string | number;
} & {
  [key: string]: number;
};

export type LineInfo = {
  dataKey: string | number | ((key: LineChartDatum) => string | number);
  stroke: string;
  name?: string;
};

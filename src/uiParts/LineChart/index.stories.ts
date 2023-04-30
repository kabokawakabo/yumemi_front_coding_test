import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";

import { expect } from "@storybook/jest";

import { LineChart } from ".";
import { LineChartDatum } from "./type";
import { createLineData } from "./setting_stories";
import { sleep } from "../../util/sleep";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Molecule/LineChart",
  component: LineChart,
  tags: ["autodocs"],
} satisfies Meta<typeof LineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing

/**
 * lineData分 line要素が生成されるかテスト
 */
export const LineElementCount: Story = {
  args: {
    height: 400,
    xLabel: "xラベル",
    yLabel: "yラベル",
    data: createLineData(["a", "b", "c"]),
    lineData: [
      { dataKey: "a", stroke: "#f00" },
      { dataKey: (d: LineChartDatum) => d.b, name: "b", stroke: "#0f0" },
      { dataKey: "c", name: "北海道", stroke: "#00f" },
    ],
    hasTooltip: true,
    title: "MyLineChart",
  },
  play: async ({ canvasElement, initialArgs }) => {
    const canvas = within(canvasElement);

    /// rechartsは要素描画時間がかかるらしいので少し待つ(ResponsiveContainerの影響？)
    await sleep(100);

    const chart = await canvas.getByTitle(initialArgs.title ?? "");
    const lines = chart?.parentElement?.getElementsByClassName("recharts-line");
    expect(lines?.length).toEqual(initialArgs.lineData.length);
  },
};

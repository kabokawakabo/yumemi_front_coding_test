import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";

import { expect } from "@storybook/jest";

import { LegendColorPickerList } from ".";
import style from "./style.module.css";
import { LegendColorPickerArg } from "./setting_stories";
//import { LABELS, CheckboxListArgs, hasLabel } from "./setting_stories";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Molecule/LegendColorPickerList",
  component: LegendColorPickerList,
  tags: ["autodocs"],
} satisfies Meta<typeof LegendColorPickerList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing

const legendDatum = LegendColorPickerArg.legendData[0];
/**
 * データ数だけ colorPickerが存在するかテスト
 */
export const ColorPickerElementCount: Story = {
  args: {
    legendData: [
      /// テストしやすいよう、label名を揃える
      legendDatum,
      legendDatum,
      legendDatum,
    ],
  },
  play: async ({ canvasElement, initialArgs }) => {
    const canvas = within(canvasElement);

    const color_picker_count = await canvas.getAllByLabelText(legendDatum.label)
      .length;
    expect(color_picker_count).toBe(initialArgs.legendData.length);
  },
};

/**
 * style.moduleで設定したclass名が ColorPickerに反映されているかテスト
 */
export const ColorPickerClassName: Story = {
  args: {
    ...LegendColorPickerArg,
  },
  play: async ({ canvasElement, initialArgs }) => {
    const canvas = within(canvasElement);

    for (const { label } of initialArgs.legendData) {
      const color_picker = await canvas.findByLabelText(label);

      /// inputの親、labelにクラス名を付与している
      const className = color_picker.parentElement?.className;
      expect(className).toBe(style.legend_color_picker);
    }
  },
};

/**
 * 表示例（色を変更後、他の例に移動することでpropsの色が変更している
 */
export const LegendColorPickerListExample: Story = {
  args: {
    ...LegendColorPickerArg,
  },
};

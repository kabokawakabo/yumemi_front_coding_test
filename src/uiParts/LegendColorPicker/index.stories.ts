import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";

import { expect } from "@storybook/jest";

import { LegendColorPicker } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Atom/LegendColorPicker",
  component: LegendColorPicker,
  tags: ["autodocs"],
} satisfies Meta<typeof LegendColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
/**
 * colorPicker表示テスト
 */
export const ColorPickerDisplay: Story = {
  args: {
    value: "#ff0000",
    label: "色選択",
  },
  play: async ({ canvasElement, initialArgs }) => {
    const canvas = within(canvasElement);

    const colorPicker = await canvas.getByLabelText(initialArgs.label);

    const color_code = colorPicker.getAttribute("value");
    expect(color_code).toBe(initialArgs.value);
  },
};

/**
 * colorPicker表示テスト
 */
export const ColorPickerClass: Story = {
  args: {
    ...ColorPickerDisplay.args,
    className: "color_picker",
  },
  play: async ({ canvasElement, initialArgs }) => {
    const canvas = within(canvasElement);

    const colorPicker = await canvas.getByLabelText(initialArgs.label);

    /// input側ではなく、labelにclassNameを付与するため上の要素を見る
    const className = colorPicker.parentElement?.className;
    expect(className).toBe(initialArgs.className);
  },
};

// TODO: colorPicker操作時、onChangeが動作するか... の自動テスト方法がわからない

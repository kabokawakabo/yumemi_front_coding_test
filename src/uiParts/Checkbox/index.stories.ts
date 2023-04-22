import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";

import { expect } from "@storybook/jest";

import { Checkbox } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Atomic/Checbox",
  component: Checkbox,
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
/**
 * checkboxがチェック状態かテスト
 */
export const CheckboxChecked: Story = {
  args: {
    value: true,
    label: "チェックボックス",
  },
  play: async ({ canvasElement, initialArgs }) => {
    const canvas = within(canvasElement);
    const checkbox = await canvas.getByRole("checkbox", {
      name: RegExp(`${initialArgs.label}`, "i"),
    });

    expect(checkbox).toBeChecked();
  },
};

/**
 * checkboxが未チェック状態かテスト
 */
export const CheckboxUnchecked: Story = {
  args: {
    ...CheckboxChecked.args,
    value: false,
  },
  play: async ({ canvasElement, initialArgs }) => {
    const canvas = within(canvasElement);
    const checkbox = await canvas.getByRole("checkbox", {
      name: RegExp(`${initialArgs.label}`, "i"),
    });

    expect(checkbox).not.toBeChecked();
  },
};

/**
 * class名が反映されるかテスト
 */
export const CheckboxClassName: Story = {
  args: {
    ...CheckboxChecked.args,
    className: "my_class",
  },
  play: async ({ canvasElement, initialArgs }) => {
    const canvas = within(canvasElement);
    const checkbox = await canvas.getByRole("checkbox", {
      name: RegExp(`${initialArgs.label}`, "i"),
    });

    /// NOTE: checkboxをラップしているlabelにclass名を付与しているため、一つ上の要素を参照
    const labelElement = checkbox.parentElement;
    const className = initialArgs.className ?? "";
    expect(labelElement).toHaveClass(className);
  },
};

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
/**
 * checkboxをクリックした際、setValueが呼ばれ、正しい引数が与えられているかテスト
 */
const OnClickArgs = {
  ...CheckboxChecked.args,
};
export const CheckboxOnClick: Story = {
  args: {
    ...OnClickArgs,
    setValue: (b) => (OnClickArgs.value = b),
  },
  play: async ({ canvasElement, initialArgs }) => {
    const canvas = within(canvasElement);

    /// labelのpropがhtml上で表示されているか（期待するラベル文をhtml内部に見つけれない場合、エラー終了）
    const checkbox = await canvas.getByRole("checkbox", {
      name: RegExp(`${initialArgs.label}`, "i"),
    });

    /// HACK: 今回使用したstate保存、別の良い実装方法がある気がする
    /// クリックでckeckboxの値が変化するか（仮stateのvalueデータが setValue関数を通じて変更したかチェック）
    await userEvent.click(checkbox);
    await expect(OnClickArgs.value).toBe(!initialArgs.value);
  },
};

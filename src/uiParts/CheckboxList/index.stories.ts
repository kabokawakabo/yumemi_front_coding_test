import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";

import { expect } from "@storybook/jest";

import { CheckboxList } from ".";
import { LABELS, CheckboxListArgs, hasLabel } from "./setting_stories";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Molecule/ChecboxList",
  component: CheckboxList,
  tags: ["autodocs"],
} satisfies Meta<typeof CheckboxList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
/**
 * labelsの数だけcheckboxが存在するかテスト
 */
export const CheckboxElementCount: Story = {
  args: {
    labels: [...LABELS],
    selected_labels: [LABELS[0]],
  },
  play: async ({ canvasElement, initialArgs }) => {
    const canvas = within(canvasElement);

    /// labelのpropがhtml上で表示されているか（期待するラベル文をhtml内部に見つけれない場合、エラー終了）
    const checkbox_count = await canvas.getAllByRole("checkbox").length;
    expect(checkbox_count).toBe(initialArgs.labels.length);
  },
};

/**
 * selectd_labelsに含まれるラベル名はcheckboxがcheck状態。それ以外はuncheckかをテスト
 */
export const CheckboxIsCheckedInSelectedLabels: Story = {
  args: {
    labels: [...LABELS],
    selected_labels: [LABELS[0]],
  },
  play: async ({ canvasElement, initialArgs }) => {
    const canvas = within(canvasElement);

    for (const checkbox_label of initialArgs.labels) {
      const checkbox = await canvas.getByRole("checkbox", {
        name: RegExp(`${checkbox_label}`, "i"),
      });

      const checkbox_expect = expect(checkbox);
      const isChecked = hasLabel(initialArgs.selected_labels, checkbox_label);
      isChecked
        ? checkbox_expect.toBeChecked()
        : checkbox_expect.not.toBeChecked();
    }
  },
};

/**
 * チェックボックスをクリックした際、state変更関数が呼び出されるかテスト
 */
export const CheckboxListOnClick: Story = {
  args: {
    ...CheckboxListArgs,
  },
  play: async ({ canvasElement, initialArgs }) => {
    const canvas = within(canvasElement);

    for (const checkbox_label of initialArgs.labels) {
      const checkbox = await canvas.getByRole("checkbox", {
        name: RegExp(`${checkbox_label}`, "i"),
      });

      /// HACK: 今回使用したstate保存、別の良い実装方法がある気がする
      /// クリックでckeckboxの値が変化するか（仮stateのvalueデータが setValue関数を通じて変更したかチェック）
      userEvent.click(checkbox);
      const initialCheckboxValue = hasLabel(
        initialArgs.selected_labels,
        checkbox_label
      );
      const afterClickCheckboxValue = hasLabel(
        CheckboxListArgs.selected_labels,
        checkbox_label
      );
      expect(afterClickCheckboxValue).toBe(!initialCheckboxValue);
    }
  },
};

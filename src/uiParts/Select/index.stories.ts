import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";

import { expect } from "@storybook/jest";

import { SelectArgs, valueObj } from "./setting_stories";
import { Select } from ".";
import style from "./style.module.css";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Molecule/Select",
  component: Select,
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing

/**
 * selectにstyle.moduleが反映されているかテスト
 */
export const SelectClassName: Story = {
  args: {
    ...SelectArgs,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = await canvas.getByRole("combobox");

    const className = select.className;
    expect(className).toBe(style.select);
  },
};

/**
 * option_data分 option要素が生成されるかテスト
 */
export const SelectElementCount: Story = {
  args: {
    ...SelectArgs,
  },
  play: async ({ canvasElement, initialArgs }) => {
    const canvas = within(canvasElement);
    const select = await canvas.getByRole("combobox");

    const len = select.childNodes.length;
    const expect_len = initialArgs.option_data.length;
    expect(len).toBe(expect_len);
  },
};

/**
 * select option要素、 labelが表示されるかテスト
 */
export const SelectOptionLabel: Story = {
  args: {
    ...SelectArgs,
  },
  play: async ({ canvasElement, initialArgs }) => {
    const canvas = within(canvasElement);
    const select = await canvas.getByRole("combobox");

    for (const i of initialArgs.option_data.keys()) {
      const option_elem = select.childNodes[i];
      const text = option_elem.textContent;
      const expect_text = initialArgs.option_data[i].label;
      expect(text).toBe(expect_text);
    }
  },
};

/**
 * selectを選択時、onChangeを通じて選択したvalueを取得できるかテスト
 */
export const SelectOptionValueElementCount: Story = {
  args: {
    ...SelectArgs,
  },
  play: async ({ canvasElement, initialArgs }) => {
    const canvas = within(canvasElement);
    const select = await canvas.getByRole("combobox");

    for (const i of initialArgs.option_data.keys()) {
      const value = initialArgs.option_data[i].value;
      userEvent.selectOptions(select, value);

      expect(value).toBe(valueObj.defaultValue);
    }
  },
};

/**
 * label要素のtextが表示されるかテスト
 */
export const SelectLabel: Story = {
  args: {
    ...SelectArgs,
  },
  play: async ({ canvasElement, initialArgs }) => {
    const canvas = within(canvasElement);
    const select_label = await canvas.getByLabelText(initialArgs.label ?? "");

    /// NOTE: labelに該当する親ノードに移動し、labelを取得。その際、optionのlabelを \n 付きで同時取得するため、一番初めのtextが一致するかのみ調べる
    const label_texts = select_label.parentElement?.innerText ?? "";
    const label = label_texts.split("\n")[0];
    expect(label).toBe(initialArgs.label);
  },
};

/**
 * label要素が改行があるか（br を含むか）テスト
 */
export const SelectLabelHasBr: Story = {
  args: {
    ...SelectArgs,
    isOtherLineLabel: true,
  },
  play: async ({ canvasElement, initialArgs }) => {
    const canvas = within(canvasElement);
    const select_label = await canvas.getByLabelText(initialArgs.label ?? "");

    // NOTE: labelに該当する親ノードに移動し、labelを取得
    const label_children = select_label.parentElement?.childNodes ?? [];
    let hasBr = false;
    const br_name = document.createElement("br").nodeName;
    for (const elem of label_children) {
      hasBr ||= elem.nodeName === br_name;
    }
    expect(hasBr).toBe(true);
  },
};

/**
 * label要素が改行が存在しないか（br を含まないか）テスト
 */
export const SelectLabelHasNotBr: Story = {
  args: {
    ...SelectArgs,
    isOtherLineLabel: false,
  },
  play: async ({ canvasElement, initialArgs }) => {
    const canvas = within(canvasElement);
    const select_label = await canvas.getByLabelText(initialArgs.label ?? "");

    // NOTE: labelに該当する親ノードに移動し、labelを取得
    const label_children = select_label.parentElement?.childNodes ?? [];

    let hasBr = false;
    const br_name = document.createElement("br").nodeName;
    for (const elem of label_children) {
      hasBr ||= elem.nodeName === br_name;
    }
    expect(hasBr).toBe(false);
  },
};

/**
 * label propに文字列入れるとlabel要素を作るかテスト
 */
export const SelectHasLabel: Story = {
  args: {
    ...SelectArgs,
    label: "ラベル",
  },
  play: async ({ canvasElement, initialArgs }) => {
    const canvas = within(canvasElement);
    const select_label = await canvas.getByLabelText(initialArgs.label ?? "");

    // NOTE: labelに該当する親ノードに移動し、labelを取得
    const label_elem = select_label.parentElement;

    const expect_nodeName = document.createElement("label").nodeName;
    expect(label_elem?.nodeName).toBe(expect_nodeName);
  },
};

/**
 * label要素が改行が存在しないか（br を含まないか）テスト
 */
export const SelectHasNotLabel: Story = {
  args: {
    ...SelectArgs,
    label: undefined,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // NOTE: ラベルがないため、SelecthasLabelテスト同様に ` canvas.getByLabelText(initialArgs.label ?? ""); ` で取り出そうとするとエラー
    const select = await canvas.getByRole("combobox");
    const label_elem = select.parentElement;

    const expect_nodeName = document.createElement("label").nodeName;
    expect(label_elem?.nodeName).not.toBe(expect_nodeName);
  },
};

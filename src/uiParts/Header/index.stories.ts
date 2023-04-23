import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";

import { expect } from "@storybook/jest";

import { Header } from ".";
import style from "./style.module.css";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Molecule/Header",
  component: Header,
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

/**
 * class名が反映されるかテスト
 */
export const HeaderClassName: Story = {
  args: {
    title: "header_nav",
  },
  play: async ({ canvasElement, initialArgs }) => {
    const canvas = within(canvasElement);
    const header = await canvas.getByTitle(initialArgs.title ?? "");

    const className = header.className;
    expect(className).toBe(style.header + " " + style.header_media);
  },
};

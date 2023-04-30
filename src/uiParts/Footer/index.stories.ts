import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";

import { expect } from "@storybook/jest";

import { Footer } from ".";
import style from "./style.module.css";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Molecule/Footer",
  component: Footer,
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

/**
 * class名が反映されるかテスト
 */
export const FooterClassName: Story = {
  args: {
    title: "footer_nav",
  },
  play: async ({ canvasElement, initialArgs }) => {
    const canvas = within(canvasElement);
    const footer = await canvas.getByTitle(initialArgs.title ?? "");

    const className = footer.className;
    expect(className).toBe(style.footer + " " + style.footer_media);
  },
};

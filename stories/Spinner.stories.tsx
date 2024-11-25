import type { Meta, StoryObj } from "@storybook/react";
import Spinner from "~/components/Spinner/Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Spinner",
  component: Spinner,
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    color: "blue",
  },
};

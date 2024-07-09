import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Sidebar",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

const menuItems = [
  <h2
    key="1"
    className="block py-2.5 px-4 rounded-lg transition duration-200 hover:bg-gray-400 text-gray-800 font-semibold shadow-md"
  >
    Page 1
  </h2>,
  <h2
    key="2"
    className="block py-2.5 px-4 rounded-lg transition duration-200 hover:bg-gray-400 text-gray-800 font-semibold shadow-md mt-4"
  >
    Page 2
  </h2>,
];


export const Sample: Story = {
  args: {
    menuItems: menuItems,
  },
};

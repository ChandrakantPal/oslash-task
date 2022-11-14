import React from "react";
import { Story, Meta } from "@storybook/react";
import { Chip, ChipProps } from "./Chip";

const meta: Meta = {
  title: "Chip",
  component: Chip,
  argTypes: {
    removeInvite: {
      defaultValue: (id: number) => {
        console.log(id);
      },
    },
  },
};
export default meta;

const Template: Story<ChipProps> = (args) => <Chip {...args} />;

export const DefaultChip = Template.bind({});
DefaultChip.args = {
  id: 5,
  text: "Product",
};

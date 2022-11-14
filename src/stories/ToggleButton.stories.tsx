import React from "react";
import { Story, Meta } from "@storybook/react";
import { ToggleButton, ToggleButtonProps } from "./ToggleButton";

const meta: Meta = {
  title: "ToggleButton",
  component: ToggleButton,
  argTypes: {
    toggle: {
      defaultValue: () => {
        console.log("toggle");
      },
    },
  },
};
export default meta;

const Template: Story<ToggleButtonProps> = (args) => <ToggleButton {...args} />;

export const ToggleOn = Template.bind({});
ToggleOn.args = {
  value: true,
};

export const ToggleOff = Template.bind({});
ToggleOff.args = {
  value: false,
};

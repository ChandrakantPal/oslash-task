import React from "react";
import { Story, Meta } from "@storybook/react";
import { Typography, TypographyProps } from "./Typography";

const meta: Meta = {
  title: "Typography",
  component: Typography,
};
export default meta;

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

export const Title = Template.bind({});
Title.args = {
  variant: "title",
  children: "Title",
};
export const Subtitle = Template.bind({});
Subtitle.args = {
  variant: "subtitle",
  children: "Subtitle",
};

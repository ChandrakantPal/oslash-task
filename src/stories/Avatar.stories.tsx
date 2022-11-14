import React from "react";
import { Story, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "./Avatar";

const meta: Meta = {
  title: "Avatar",
  component: Avatar,
};
export default meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const DefaultSizeRegularAvatar = Template.bind({});
DefaultSizeRegularAvatar.args = {
  children: (
    <img
      src="/images/avatar1.png"
      alt="avatar"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  ),
};

export const SmallSizeRegularAvatar = Template.bind({});
SmallSizeRegularAvatar.args = {
  size: "small",
  children: (
    <img
      src="/images/avatar1.png"
      alt="avatar"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  ),
};

export const LargeSizeRegularAvatar = Template.bind({});
LargeSizeRegularAvatar.args = {
  size: "large",
  children: (
    <img
      src="/images/avatar1.png"
      alt="avatar"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  ),
};

export const SamllSizeSquareAvatar = Template.bind({});
SamllSizeSquareAvatar.args = {
  size: "small",
  variant: "square",
  children: <p style={{ color: "#FFFFFF", fontSize: 14 }}>E</p>,
};

export const MediumSizeSquareAvatar = Template.bind({});
MediumSizeSquareAvatar.args = {
  variant: "square",
  size: "medium",
  children: <p style={{ color: "#FFFFFF", fontSize: 14 }}>E</p>,
};

export const LargeSizeSquareAvatar = Template.bind({});
LargeSizeSquareAvatar.args = {
  variant: "square",
  size: "large",
  children: <p style={{ color: "#FFFFFF", fontSize: 14 }}>E</p>,
};

import React from "react";
import { Story, Meta } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta = {
  title: "Avatar",
  component: Avatar,
};
export default meta;

export const DefaultSizeRegularAvatar = () => (
  <Avatar>
    <img
      src="/images/avatar1.png"
      alt="avatar"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </Avatar>
);

export const SmallSizeRegularAvatar = () => (
  <Avatar size="small">
    <img
      src="/images/avatar1.png"
      alt="avatar"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </Avatar>
);

export const LargeSizeRegularAvatar = () => (
  <Avatar size="large">
    <img
      src="/images/avatar1.png"
      alt="avatar"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </Avatar>
);

export const SamllSizeSquareAvatar = () => (
  <Avatar variant="square" size="small">
    <p style={{ color: "#FFFFFF", fontSize: 14 }}>E</p>
  </Avatar>
);

export const MediumSizeSquareAvatar = () => (
  <Avatar variant="square" size="medium">
    <p style={{ color: "#FFFFFF", fontSize: 14 }}>E</p>
  </Avatar>
);

export const LargeSizeSquareAvatar = () => (
  <Avatar variant="square" size="large">
    <p style={{ color: "#FFFFFF", fontSize: 14 }}>E</p>
  </Avatar>
);

import React from "react";
import { Story, Meta } from "@storybook/react";
import { ToggleButton } from "./ToggleButton";

const meta: Meta = {
  title: "ToggleButton",
  component: ToggleButton,
};
export default meta;

export const ToggleOn = () => (
  <ToggleButton
    value={true}
    toggle={() => {
      console.log("toggle");
    }}
  />
);

export const ToggleOff = () => (
  <ToggleButton
    value={false}
    toggle={() => {
      console.log("toggle");
    }}
  />
);

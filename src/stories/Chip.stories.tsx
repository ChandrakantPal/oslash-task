import React from "react";
import { Story, Meta } from "@storybook/react";
import { Chip } from "./Chip";

const meta: Meta = {
  title: "Chip",
  component: Chip,
};
export default meta;

export const DefaultSizeRegularAvatar = () => (
  <Chip
    id={5}
    text="Product"
    removeInvite={(id) => {
      console.log(id);
    }}
  />
);

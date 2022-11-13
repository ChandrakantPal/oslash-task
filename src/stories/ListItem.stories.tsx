import React from "react";
import { Story, Meta } from "@storybook/react";
import { ListItem } from "./ListItem";

const meta: Meta = {
  title: "ListItem",
  component: ListItem,
};
export default meta;

export const DefaultListItem = () => (
  <ListItem>
    <p>Left</p>
    <p>Right</p>
  </ListItem>
);

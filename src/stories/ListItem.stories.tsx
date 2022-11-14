import React from "react";
import { Story, Meta } from "@storybook/react";
import { ListItem, ListItemProps } from "./ListItem";

const meta: Meta = {
  title: "ListItem",
  component: ListItem,
  argTypes: {
    children: {
      defaultValue: (
        <>
          <p>Item 1</p>
          <p>Item 1</p>
        </>
      ),
    },
    onClick: {
      defaultValue: () => {
        console.log("clicked");
      },
    },
  },
};
export default meta;

const Template: Story<ListItemProps> = (args) => <ListItem {...args} />;

export const DefaultListItemRow = Template.bind({});
DefaultListItemRow.args = {
  itemDirection: "row",
};
export const DefaultListItemColumn = Template.bind({});
DefaultListItemColumn.args = {
  itemDirection: "column",
};

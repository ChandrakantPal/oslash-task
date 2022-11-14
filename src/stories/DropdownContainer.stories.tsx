import React from "react";
import { Story, Meta } from "@storybook/react";
import { DropdownContainer, DropdownContainerProps } from "./DropdownContainer";

const meta: Meta = {
  title: "DropdownContainer",
  component: DropdownContainer,
  argTypes: {
    onClose: () => {
      console.log("closed");
    },
  },
};
export default meta;

const Template: Story<DropdownContainerProps> = (args) => (
  <DropdownContainer {...args} />
);

export const DefaultDropdownContainer = Template.bind({});
DefaultDropdownContainer.args = {
  children: (
    <p style={{ padding: 12 }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste molestias
      aperiam laudantium quia aspernatur architecto consequatur repellendus sit,
      delectus accusantium! Quaerat ab quis recusandae laboriosam molestias?
      Impedit unde dolorum eaque?
    </p>
  ),
};

export const DropdownContainerWithMultipleItems = Template.bind({});
DropdownContainerWithMultipleItems.args = {
  children: (
    <>
      <p style={{ padding: 12, borderBottom: "0.5px solid #e5e7eb" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste molestias
      </p>
      <p style={{ padding: 12 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste molestias
        aperiam laudantium quia aspernatur
      </p>
    </>
  ),
};

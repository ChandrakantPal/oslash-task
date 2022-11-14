import React from "react";
import { Meta, Story } from "@storybook/react";

import { FlexRowContainer, FlexRowContainerProps } from "./FlexRowContainer";

const meta: Meta = {
  title: "FlexRowContainer",
  component: FlexRowContainer,
  argTypes: {
    children: {
      defaultValue: (
        <>
          <p>Item 1</p>
          <p>Item 2</p>
        </>
      ),
    },
  },
};
export default meta;

const Template: Story<FlexRowContainerProps> = (args) => (
  <FlexRowContainer {...args} />
);

export const FlexRowContainerJustifyCenter = Template.bind({});
FlexRowContainerJustifyCenter.args = {
  justify: "center",
};

export const FlexRowContainerJustifySpaceBetween = Template.bind({});
FlexRowContainerJustifySpaceBetween.args = {
  justify: "space-between",
};

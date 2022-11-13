import React from "react";
import { Story, Meta } from "@storybook/react";

import { FlexRowContainer } from "./FlexRowContainer";

const meta: Meta = {
  title: "FlexRowContainer",
  component: FlexRowContainer,
};
export default meta;

export const FlexRowContainerJustifyCenter = () => (
  <FlexRowContainer justify="center">
    <p>Item 1</p>
    <p>Item 2</p>
  </FlexRowContainer>
);

export const FlexRowContainerJustifySpaceBetween = () => (
  <FlexRowContainer justify="space-between">
    <p>Item 1</p>
    <p>Item 2</p>
  </FlexRowContainer>
);

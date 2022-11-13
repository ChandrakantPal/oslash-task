import React from "react";
import { Story, Meta } from "@storybook/react";
import { DropdownContainer } from "./DropdownContainer";

const meta: Meta = {
  title: "DropdownContainer",
  component: DropdownContainer,
};
export default meta;

export const DefaultDropdownContainer = () => (
  <DropdownContainer
    onClose={() => {
      console.log("clicked");
    }}
  >
    <p style={{ padding: 12 }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste molestias
      aperiam laudantium quia aspernatur architecto consequatur repellendus sit,
      delectus accusantium! Quaerat ab quis recusandae laboriosam molestias?
      Impedit unde dolorum eaque?
    </p>
  </DropdownContainer>
);

export const DropdownContainerWithMultipleItems = () => (
  <DropdownContainer
    onClose={() => {
      console.log("clicked");
    }}
  >
    <p style={{ padding: 12, border: "0.5px solid #E5E7EB", margin: 0 }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste molestias
      aperiam laudantium quia aspernatur architecto consequatur repellendus sit,
      delectus accusantium! Quaerat ab quis recusandae laboriosam molestias?
      Impedit unde dolorum eaque?
    </p>
    <p style={{ padding: 12, border: "0.5px solid #E5E7EB", margin: 0 }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste molestias
      aperiam laudantium quia aspernatur architecto consequatur repellendus sit,
      delectus accusantium! Quaerat ab quis recusandae laboriosam molestias?
      Impedit unde dolorum eaque?
    </p>
    <p style={{ padding: 12, border: "0.5px solid #E5E7EB", margin: 0 }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste molestias
      aperiam laudantium quia aspernatur architecto consequatur repellendus sit,
      delectus accusantium! Quaerat ab quis recusandae laboriosam molestias?
      Impedit unde dolorum eaque?
    </p>
  </DropdownContainer>
);

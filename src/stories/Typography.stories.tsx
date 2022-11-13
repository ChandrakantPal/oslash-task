import React from "react";
import { Story, Meta } from "@storybook/react";
import { Typography } from "./Typography";

const meta: Meta = {
  title: "Typography",
  component: Typography,
};
export default meta;

export const Title = () => <Typography variant="title">Title</Typography>;
export const Subtitle = () => (
  <Typography variant="subtitle">Subtitle</Typography>
);

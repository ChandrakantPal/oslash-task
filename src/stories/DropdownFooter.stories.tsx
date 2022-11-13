import React from "react";
import { Story, Meta } from "@storybook/react";
import { DropdownFooter } from "./DropdownFooter";
import { Typography } from "./Typography";

const meta: Meta = {
  title: "DropdownFooter",
  component: DropdownFooter,
};
export default meta;

export const DefaultDropdownFooter = () => (
  <DropdownFooter>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ marginRight: 10 }}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.48511 5C4.85118 4.22321 5.83895 3.66667 7.00004 3.66667C8.4728 3.66667 9.6667 4.5621 9.6667 5.66667C9.6667 6.59963 8.81496 7.38338 7.66285 7.6044C7.30125 7.67377 7.00004 7.96514 7.00004 8.33333M7 10.3333H7.00667M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z"
            stroke="#6B7280"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <Typography variant="subtitle">learn about sharing</Typography>
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ marginRight: 10 }}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.21895 5.78105C7.17755 4.73965 5.48911 4.73965 4.44772 5.78105L1.78105 8.44772C0.73965 9.48911 0.73965 11.1776 1.78105 12.219C2.82245 13.2603 4.51089 13.2603 5.55228 12.219L6.28666 11.4846M5.78105 8.21895C6.82245 9.26035 8.51089 9.26035 9.55228 8.21895L12.219 5.55228C13.2603 4.51089 13.2603 2.82245 12.219 1.78105C11.1776 0.73965 9.48911 0.73965 8.44772 1.78105L7.71464 2.51412"
            stroke="#111827"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <Typography variant="subtitle">Copy link</Typography>
    </div>
  </DropdownFooter>
);

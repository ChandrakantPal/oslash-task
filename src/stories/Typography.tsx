import * as React from "react";
import classNames from "classnames";
import "./typography.css";

export interface TypographyProps extends React.PropsWithChildren {
  variant?: "title" | "subtitle";
}

export const Typography: React.FC<TypographyProps> = ({
  variant = "title",
  children,
}) => {
  return (
    <p
      className={classNames({
        title: variant === "title",
        subtitle: variant === "subtitle",
      })}
    >
      {children}
    </p>
  );
};

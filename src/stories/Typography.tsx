import * as React from "react";
import classNames from "classnames";
import "./typography.css";

interface TypographyProps {
  variant?: "title" | "subtitle";
}

export const Typography: React.FC<React.PropsWithChildren<TypographyProps>> = ({
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

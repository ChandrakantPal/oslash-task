import classNames from "classnames";
import * as React from "react";
import "./flexrowcontainer.css";

export interface FlexRowContainerProps extends React.PropsWithChildren {
  justify: "center" | "space-between" | "flex-start" | "flex-end";
}

export const FlexRowContainer: React.FC<FlexRowContainerProps> = ({
  children,
  justify,
}) => {
  return (
    <div
      className={classNames("flex__container", {
        justify__center: justify === "center",
        justify__space__between: justify === "space-between",
        justify__flex__start: justify === "flex-start",
        justify__flex__end: justify === "flex-end",
      })}
    >
      {children}
    </div>
  );
};

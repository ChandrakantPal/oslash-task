import classNames from "classnames";
import * as React from "react";
import "./listitem.css";

interface ListItemProps {
  itemDirection?: "row" | "column";
  onClick?: () => void;
}

export const ListItem: React.FC<React.PropsWithChildren<ListItemProps>> = ({
  children,
  itemDirection,
  onClick,
}) => {
  return (
    <li
      className={classNames("list-item", {
        column: itemDirection === "column",
        clickable: onClick !== undefined,
      })}
      onClick={onClick}
    >
      {children}
    </li>
  );
};

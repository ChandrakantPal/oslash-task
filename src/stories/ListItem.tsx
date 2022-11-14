import classNames from "classnames";
import * as React from "react";
import "./listitem.css";

export interface ListItemProps extends React.PropsWithChildren {
  itemDirection?: "row" | "column";
  onClick?: () => void;
}

export const ListItem: React.FC<ListItemProps> = ({
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

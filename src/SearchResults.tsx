import * as React from "react";
import { AccessOption, InvitedData } from "./App";
import { Avatar } from "./stories/Avatar";
import { FlexRowContainer } from "./stories/FlexRowContainer";
import { ListItem } from "./stories/ListItem";
import { Typography } from "./stories/Typography";

type FilterData = Omit<InvitedData, "access">;

interface SearchResultsProps {
  filteredData: FilterData[];
  addToInvited: (invite: InvitedData) => void;
  access: AccessOption;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  filteredData,
  addToInvited,
  access,
}) => {
  return (
    <ul>
      {filteredData.map((item) => (
        <ListItem
          key={item.id}
          onClick={() => {
            addToInvited({ ...item, access });
          }}
        >
          <FlexRowContainer justify="flex-start">
            <div style={{ marginRight: 12 }}>
              <Avatar
                variant={item.type === "people" ? "regular" : "square"}
                size="small"
              >
                {item.type === "people" ? (
                  <img src={item.avatar} alt={item.name} />
                ) : (
                  <p style={{ color: "#FFFFFF", fontSize: 14 }}>
                    {item.avatar}
                  </p>
                )}
              </Avatar>
            </div>
            <Typography variant="title">{item.name}</Typography>
          </FlexRowContainer>
        </ListItem>
      ))}
    </ul>
  );
};

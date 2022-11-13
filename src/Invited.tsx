import * as React from "react";
import { AccessOption, InvitedData } from "./App";
import { Avatar } from "./stories/Avatar";
import { FlexRowContainer } from "./stories/FlexRowContainer";
import { ListItem } from "./stories/ListItem";
import { Typography } from "./stories/Typography";

interface InvitedProps {
  invitedList: InvitedData[];
  changeInvitedAccess: (id: number, accessType: AccessOption) => void;
}

export const Invited: React.FC<InvitedProps> = ({
  invitedList,
  changeInvitedAccess,
}) => {
  return (
    <>
      {invitedList.length > 0 &&
        invitedList.map((item) => (
          <ListItem key={item.id}>
            <FlexRowContainer justify="space-between">
              <FlexRowContainer justify="flex-start">
                <div style={{ marginRight: 8 }}>
                  <Avatar
                    size="large"
                    variant={
                      item.type === "people" ||
                      item.name === "Everyone at OSlash"
                        ? "regular"
                        : "square"
                    }
                  >
                    {item.type === "people" ||
                    item.name === "Everyone at OSlash" ? (
                      <img src={item.avatar} alt={item.name} />
                    ) : (
                      <p style={{ color: "#FFFFFF", fontSize: 14 }}>
                        {item.avatar}
                      </p>
                    )}
                  </Avatar>
                </div>
                <div>
                  {item.type === "people" ? (
                    <Typography variant="title">{item.name}</Typography>
                  ) : (
                    <>
                      <Typography variant="title">
                        Everyone at {item.name}
                      </Typography>
                      <Typography variant="subtitle">
                        {item.member} group members
                      </Typography>
                    </>
                  )}
                </div>
              </FlexRowContainer>
              <select
                style={{ border: "none", outline: "none" }}
                value={item.access}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  changeInvitedAccess(item.id, e.target.value as AccessOption);
                }}
              >
                <option value="full">Full access</option>
                <option value="edit">Can edit</option>
                <option value="view">Can view</option>
                <option value="no">No access</option>
              </select>
            </FlexRowContainer>
          </ListItem>
        ))}
    </>
  );
};

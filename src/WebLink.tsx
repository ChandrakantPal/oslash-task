import * as React from "react";
import { Avatar } from "./stories/Avatar";
import { FlexRowContainer } from "./stories/FlexRowContainer";
import { ListItem } from "./stories/ListItem";
import { ToggleButton } from "./stories/ToggleButton";
import { Typography } from "./stories/Typography";

export const WebLink: React.FC = () => {
  const [webLinkToggle, setWebLinkToggle] = React.useState(false);

  return (
    <ListItem>
      <FlexRowContainer justify="flex-start">
        <div style={{ marginRight: 12 }}>
          <Avatar>
            <img src="/images/globe.png" alt="web-link" />
          </Avatar>
        </div>
        <div>
          <Typography variant="title">Share to web</Typography>
          <Typography variant="subtitle">
            Publish and share link with anyone
          </Typography>
        </div>
      </FlexRowContainer>
      <ToggleButton
        value={webLinkToggle}
        toggle={() => {
          setWebLinkToggle((current) => !current);
        }}
      />
    </ListItem>
  );
};

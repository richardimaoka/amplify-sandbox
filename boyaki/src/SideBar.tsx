import { CognitoUserAmplify } from "@aws-amplify/ui";
import "@aws-amplify/ui-react/styles.css";
import PersonIcon from "@mui/icons-material/Person";
import PublicIcon from "@mui/icons-material/Public";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import { API, Auth, graphqlOperation } from "aws-amplify";
import React from "react";
import { createPost } from "./graphql/mutations";

const MAX_POST_CONTENT_LENGTH = 140;

interface SideBarProps {
  user: CognitoUserAmplify;
  activeListItem: string;
}

const generateUuid = (): string => {
  // https://github.com/GoogleChrome/chrome-platform-analytics/blob/master/src/internal/identifier.js
  // const FORMAT: string = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
  let chars = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");
  for (let i = 0, len = chars.length; i < len; i++) {
    switch (chars[i]) {
      case "x":
        chars[i] = Math.floor(Math.random() * 16).toString(16);
        break;
      case "y":
        chars[i] = (Math.floor(Math.random() * 4) + 8).toString(16);
        break;
    }
  }
  return chars.join("");
};

export const SideBar = ({
  activeListItem,
  user,
}: SideBarProps): JSX.Element => {
  // const history = useHistory();

  const [value, setValue] = React.useState("");
  const [isError, setIsError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("");

  const handleChange = (event: any) => {
    setValue(event.target.value);
    if (event.target.value.length > MAX_POST_CONTENT_LENGTH) {
      setIsError(true);
      setHelperText(
        "MAX_POST_CONTENT_LENGTH - event.target.value.length".toString
      );
    } else {
      setIsError(false);
      setHelperText("");
    }
  };

  const onPost = async () => {
    const res = await API.graphql(
      graphqlOperation(createPost, {
        input: {
          type: "post",
          content: value,
          id: generateUuid(),
          owner: user.getUsername(),
          timestamp: Math.floor(Date.now() / 1000),
        },
      })
    );
    console.log(res);
    setValue("");
  };

  const signOut = () => {
    Auth.signOut()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <Drawer variant="permanent" anchor="left" style={{ width: "240px" }}>
      <List>
        <ListItem
          button
          selected={activeListItem === "global-timeline"}
          onClick={() => {
            Auth.currentAuthenticatedUser().then((user) => {
              // history.push("/global-timeline");
            });
          }}
          key="global-timeline"
        >
          <ListItemIcon>
            <PublicIcon />
          </ListItemIcon>
          <ListItemText primary="Global Timeline" />
        </ListItem>
        <ListItem
          button
          selected={activeListItem === "profile"}
          onClick={() => {
            Auth.currentAuthenticatedUser().then((user) => {
              // history.push("/" + user.username);
            });
          }}
          key="profile"
        >
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem key="post-input-field">
          <ListItemText
            primary={
              <TextField
                error={isError}
                helperText={helperText}
                id="post-input"
                label="Type your post!"
                multiline
                // rowsMax="8"
                variant="filled"
                value={value}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            }
          />
        </ListItem>
        <ListItem key="post-button">
          <ListItemText
            primary={
              <Button
                variant="contained"
                color="primary"
                disabled={isError}
                onClick={onPost}
                fullWidth
              >
                Post
              </Button>
            }
          />
        </ListItem>
        <ListItem key="logout">
          <ListItemText
            primary={
              <Button variant="outlined" onClick={signOut} fullWidth>
                Logout
              </Button>
            }
          />
        </ListItem>
      </List>
    </Drawer>
  );
};

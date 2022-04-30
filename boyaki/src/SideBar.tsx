import "@aws-amplify/ui-react/styles.css";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import TextField from "@mui/material/TextField";
import PublicIcon from "@mui/icons-material/Public";
import PersonIcon from "@mui/icons-material/Person";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { API, Auth, graphqlOperation } from "aws-amplify";
import React from "react";

const drawerWidth = 340;
const MAX_POST_CONTENT_LENGTH = 140;

interface SideBarProps {
  activeListItem: string;
}

export const SideBar = ({ activeListItem }: SideBarProps): JSX.Element => {
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
    // const res = await API.graphql(
    //   graphqlOperation(createPost, {
    //     input: {
    //       type: "post",
    //       content: value,
    //       timestamp: Math.floor(Date.now() / 1000),
    //     },
    //   })
    // );
    // console.log(res);
    // setValue("");
  };

  const signOut = () => {
    Auth.signOut()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      asersdf
      <Drawer
        // className={classes.drawer}
        variant="permanent"
        classes={
          {
            // paper: classes.drawerPaper,
          }
        }
        anchor="left"
      >
        {/* <div className={classes.toolbar} /> */}
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
    </div>
  );
};

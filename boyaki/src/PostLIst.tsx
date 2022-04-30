import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import { Post } from "./API";

interface PostListPros {
  isLoading: boolean;
  posts: Post[];
  getAdditionalPosts: () => void;
  listHeaderTitle: string;
  listHeaderTitleButton?: JSX.Element;
}
export const PostList = ({
  posts,
  isLoading,
  getAdditionalPosts,
  listHeaderTitleButton,
  listHeaderTitle,
}: PostListPros) => {
  return (
    <div
      style={{
        width: "800px",
        wordBreak: "break-all",
        overflow: "scroll",
        borderRight: "1px solid #37444C",
      }}
    >
      {isLoading ? (
        <div
          style={{
            textAlign: "center",
            paddingTop: 20,
          }}
        >
          <CircularProgress size={25} />
        </div>
      ) : (
        <List disablePadding>
          <ListItem
            alignItems="flex-start"
            style={{
              position: "sticky",
              top: 0,
              zIndex: 1200,
              backgroundColor: "#15202B",
              borderBottom: "1px solid #37444C",
            }}
          >
            <Typography
              variant="h5"
              fontWeight="fontWeightBold"
              style={{ width: "100%" }}
            >
              {listHeaderTitle}
              {listHeaderTitleButton && listHeaderTitleButton}
            </Typography>
          </ListItem>
          {posts.map((post) => (
            <span>
              <PostItem post={post} />
              <Divider component="li" />
            </span>
          ))}
          <ListItem
            alignItems="flex-start"
            style={{ textAlign: "center" }}
            key="loadmore"
          >
            <ListItemText
              primary={
                <Button variant="outlined" onClick={() => getAdditionalPosts()}>
                  Read More{" "}
                </Button>
              }
            />
          </ListItem>
        </List>
      )}
    </div>
  );
};

interface PostItemProps {
  post: Post;
}

function PostItem({ post }: PostItemProps) {
  // const classes = useStyles();
  // const history = useHistory();
  // const now = moment();
  // console.log(now);

  // const calcTimestampDiff = (timestamp) => {
  //   const scales = [
  //     "years",
  //     "months",
  //     "weeks",
  //     "days",
  //     "hours",
  //     "minutes",
  //     "seconds",
  //   ];

  //   for (let i = 0; i < scales.length; i++) {
  //     const scale = scales[i];
  //     const diff = moment(now).diff(timestamp * 1000, scale);
  //     if (diff > 0) return diff + scale.charAt(0);
  //   }

  //   return 0 + scales[scales.length - 1].charAt(0);
  // };

  return (
    // <ListItem alignItems="flex-start" key={post.id}>
    <ListItem alignItems="flex-start" key={post.id}>
      <ListItemAvatar>
        <div
          style={{
            cursor: "pointer",
          }}
          // onClick={() => history.push("/" + post.owner)}
        >
          <Avatar alt={post.owner} src="/" />
        </div>
      </ListItemAvatar>
      <ListItemText
        primary={
          <React.Fragment>
            {post.owner}
            <Typography color="textSecondary" display="inline">
              {
                " " + String.fromCharCode(183) + " "
                // + calcTimestampDiff(post.timestamp)}
              }
            </Typography>
          </React.Fragment>
        }
        secondary={<Typography color="textPrimary">{post.content}</Typography>}
      />
    </ListItem>
  );
}

import React, { useReducer, useState } from "react";
import { PostList } from "./PostLIst";
// import PostList from "../components/PostList";
import { SideBar } from "./SideBar";

const SUBSCRIPTION = "SUBSCRIPTION";
const INITIAL_QUERY = "INITIAL_QUERY";
const ADDITIONAL_QUERY = "ADDITIONAL_QUERY";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case INITIAL_QUERY:
      return action.posts;
    case ADDITIONAL_QUERY:
      return [...state, ...action.posts];
    case SUBSCRIPTION:
      return [action.post, ...state];
    default:
      return state;
  }
};

export const AllPosts = (): JSX.Element => {
  const [posts, dispatch] = useReducer(reducer, []);
  const [nextToken, setNextToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // const getPosts = async (type, nextToken = null) => {
  //   const res = await API.graphql(
  //     graphqlOperation(listPostsSortedByTimestamp, {
  //       type: "post",
  //       sortDirection: "DESC",
  //       limit: 20, //default = 10
  //       nextToken: nextToken,
  //     })
  //   );
  //   console.log(res);
  //   dispatch({ type: type, posts: res.data.listPostsSortedByTimestamp.items });
  //   setNextToken(res.data.listPostsSortedByTimestamp.nextToken);
  //   setIsLoading(false);
  // };

  // const getAdditionalPosts = () => {
  //   if (nextToken === null) return; //Reached the last page
  //   getPosts(ADDITIONAL_QUERY, nextToken);
  // };

  // useEffect(() => {
  //   getPosts(INITIAL_QUERY);

  //   const subscription = API.graphql(graphqlOperation(onCreatePost)).subscribe({
  //     next: (msg) => {
  //       console.log("allposts subscription fired");
  //       const post = msg.value.data.onCreatePost;
  //       dispatch({ type: SUBSCRIPTION, post: post });
  //     },
  //   });
  //   return () => subscription.unsubscribe();
  // }, []);

  return (
    <React.Fragment>
      <SideBar activeListItem="global-timeline" />
      <PostList
        isLoading={isLoading}
        // posts={posts}
        // getAdditionalPosts={getAdditionalPosts}
        listHeaderTitle={"Global Timeline"}
      />
    </React.Fragment>
  );
};

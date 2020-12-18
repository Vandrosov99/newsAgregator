import React from "react";
import Post from "../components/Post";
import { useSelector } from "react-redux";

export default function PostList() {
  const state = useSelector(state => state);
  const posts = state.postsReducer;
  return (
    <div>
      {posts.length ? (
        posts.map((item, index) => {
          return (
            <Post
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          );
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

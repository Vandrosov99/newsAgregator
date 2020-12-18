import React from "react";
import Post from "../components/Post";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";

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
        <div className='loader'>
          <Loader
            type='Puff'
            color='#00BFFF'
            height='200px'
            width='200px'
            timeout={3000} //3 secs
          />
        </div>
      )}
    </div>
  );
}

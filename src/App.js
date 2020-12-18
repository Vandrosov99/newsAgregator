import React, { Component } from "react";
import PostList from "./components/PostList";

import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import actions from "./actions/index";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function App() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  console.log(state);

  useEffect(() => {
    console.log("useEff");
    fetchPost();
  }, []);

  const fetchPost = () => {
    fetch("https://5fdbeba591f19e0017334cd1.mockapi.io/posts")
      .then(data => {
        return data.json();
      })
      .then(data => {
        dispatch(actions.signPost(data));
        return true;
      });
  };

  return (
    <div>
      <PostList />
    </div>
  );
}

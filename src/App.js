import React, { Component } from "react";
import PostList from "./components/PostList";

import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import actions from "./actions/index";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    allFetchs();
  }, []);

  const allFetchs = () => {
    fetchPost();
    fetchCovidInfo();
    fetchMoney();
  };

  const fetchCovidInfo = () => {
    fetch("./data/cov_result.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        dispatch(actions.signCOV(data));
      });
  };
  const fetchPost = () => {
    fetch("./data/news_result.json")
      .then(data => {
        return data.json();
      })
      .then(data => {
        dispatch(actions.signPost(data));
      });
  };
  const fetchMoney = () => {
    fetch("./data/money_result.json")
      .then(data => {
        return data.json();
      })
      .then(data => {
        dispatch(actions.signMoney(data));
      });
  };
  return (
    <div>
      <Header />
      <PostList fetchPost={fetchPost} />
      <Footer />
    </div>
  );
}

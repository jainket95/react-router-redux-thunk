/* eslint-disable import/default */
import React from "react";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <div className="App">
            <h1>Posts</h1>
            <PostForm />
            <Posts />
            <hr />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

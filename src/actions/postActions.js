import { FETCH_POSTS, NEW_POST } from "./types";

export function fetchPosts() {
  return async function(dispatch) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    dispatch({
      type: FETCH_POSTS,
      payload: posts
    });
  };
}

export function createPost(postData) {
  return async function(dispatch) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(postData)
    });
    const post = await res.json();
    dispatch({
      type: NEW_POST,
      payload: post
    });
  };
}

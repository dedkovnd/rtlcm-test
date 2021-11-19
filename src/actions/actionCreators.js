import {
  FETCH_POSTS,
  SEARCH_POSTS,
  FILTER_POSTS
} from "../actions/actionTypes";

export function searchPost(input) {
  return { type: SEARCH_POSTS, payload: input };
}

export function filterPosts(filter) {
  return { type: FILTER_POSTS, payload: filter };
}

export function fetchPosts() {
  return async (dispatch) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=30"
    );
    const json = await response.json();
    dispatch({ type: FETCH_POSTS, payload: json });
  };
}

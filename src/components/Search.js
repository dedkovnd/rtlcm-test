import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchPost } from "../actions/actionCreators";
import { fetchPosts } from "../actions/actionCreators";

export function Search() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.posts.search);

  const inputHandler = (evt) => {
    const { value } = evt.target;
    dispatch(searchPost(value));
    if (value.length === 0) {
      dispatch(fetchPosts());
    }
  };
  return (
    <form>
      <input
        className="search"
        type="text"
        placeholder="enter text"
        value={search}
        onChange={inputHandler}
      ></input>
    </form>
  );
}

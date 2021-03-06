import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, filterPosts } from "../actions/actionCreators";

export function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.fetchPosts);
  const filterposts = useSelector((state) => state.posts.filterPosts);
  const currentKey = useSelector((state)=> state.posts.key);
  const [sort, setSort] = useState(false);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const clickHandler = (key) => {
    dispatch(filterPosts(key));
    if (currentKey == key) {
      setSort(false);
      dispatch(filterPosts(""))
    } else {
      setSort(true)
    }
  };

  return (
    <div className="posts">
      <ul className="posts-nav">
        <li className="nav-item" onClick={() => setSort(false)}>
          All
        </li>
        <li className="nav-item" onClick={() => clickHandler("title")}>
          Title
        </li>
        <li className="nav-item" onClick={() => clickHandler("userId")}>
          User
        </li>
        <li className="nav-item" onClick={() => clickHandler("body")}>
          Text
        </li>
      </ul>
      {!sort && (
        <ul>
          {posts.map((post) => (
            <li className="post" key={post.id}>
              <h3>{post.title}</h3>
              <span className="post-user">{`User ${post.userId}`}</span>
              <div>{post.body}</div>
            </li>
          ))}
        </ul>
      )}
      {sort && (
        <ul>
          {filterposts.map((post, i) => (
            <li className="post-filter" key={i}>
              <span>{post}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

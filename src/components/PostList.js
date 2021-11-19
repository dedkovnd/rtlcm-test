import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, filterPosts } from "../actions/actionCreators";

export function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.filterPosts);
  const [sort, setSort] = useState(false);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const clickHandler = (key) => {
    dispatch(filterPosts(key));
    setSort(true)
  };

  return (
    <div className="posts">
      <ul className="posts-nav">
        <li className="nav-item">All</li>
        <li className="nav-item" onClick={() => clickHandler("title")}>
          Title
        </li>
        <li className="nav-item">User</li>
        <li className="nav-item">Text</li>
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
      {sort && <ul>
        {posts.map((post, i) => (
          <li className="post-filter" key={i}>
            <span>{post}</span>
          </li>
        ))}
      </ul>}
    </div>
  );
}

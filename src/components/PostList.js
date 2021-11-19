import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../actions/actionCreators";


export function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.filterPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="posts">
      <ul className="posts-nav">
        <li className="nav-item">All</li>
        <li className="nav-item">Title</li>
        <li className="nav-item">User</li>
        <li className="nav-item">Text</li>
      </ul>
      <ul>
        {posts.map((post) => (
          <li className="post" key={post.id}>
            <h3>{post.title}</h3>
            <span className="post-user">{`User ${post.userId}`}</span>
            <div>{post.body}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

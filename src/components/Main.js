import React from "react";
import { Search } from "./Search";
import { PostList } from "./PostList";

export function Main() {
  return (
    <div className="main">
      <div className="header">
        <div>
          <h1>Test</h1>
        </div>
        <Search />
      </div>
      <PostList />
    </div>
  );
}

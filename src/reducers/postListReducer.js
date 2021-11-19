import {
  FETCH_POSTS,
  SEARCH_POSTS,
  FILTER_POSTS
} from "../actions/actionTypes";

const initialState = {
  fetchPosts: [],
  filterPosts: [],
  search: "",
  key: ""
};

const postListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        fetchPosts: action.payload
      };
    case SEARCH_POSTS: {
      const str = action.payload;
      if (str.length > 0) {
        const targetPosts = state.fetchPosts.filter(
          (e) => e.title.includes(str) || e.body.includes(str)
        );
        return { ...state, search: action.payload, fetchPosts: targetPosts };
      } else {
        return initialState;
      }
    }
    case FILTER_POSTS: {
      const keyPost = action.payload;
      const filterData = state.fetchPosts.map((e) => e[keyPost]);
      return {
        ...state,
        key: action.payload,
        filterPosts: filterData
      };
    }
    default:
      return state;
  }
};

export default postListReducer;

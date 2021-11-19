import {
  FETCH_POSTS,
  SEARCH_POSTS,
  RETURN_POSTS,
  FILTER_POSTS
} from "../actions/actionTypes";

const initialState = {
  fetchPosts: [],
  filterPosts: [],
  search: "",
};

const postListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        fetchPosts: action.payload,
        filterPosts: action.payload,
      };
    case SEARCH_POSTS: {
      const str = action.payload;
      if (str.length > 0) {
        const newData = state.filterPosts.filter(
          (e) => e.title.includes(str) || e.body.includes(str)
        );
        return { ...state, search: action.payload, filterPosts: newData };
      } else {
        return initialState;
      }
    }
    case FILTER_POSTS: {
      const key = action.payload;
      const filterData = state.filterPosts.map((e) => e[key]);
      return {
        ...state,
        filterPosts: filterData
      };
    }
    case RETURN_POSTS: {
      const copy = state.fetchPosts
      return { ...state, filterPosts: copy}
    }
    default:
      return state;
  }
};

export default postListReducer;

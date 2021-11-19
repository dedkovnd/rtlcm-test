import { fetchPosts } from "../actions/actionCreators";
import {
  FETCH_POSTS,
  SEARCH_POSTS,
  RETURN_POSTS,
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
    case RETURN_POSTS: {
        return { ...state, filterPosts: [...state.fetchPosts]}
    }
    default:
      return state;
  }
};

export default postListReducer;

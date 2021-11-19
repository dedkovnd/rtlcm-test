import  { createStore, combineReducers, compose, applyMiddleware } from "redux";
import postListReducer from "../reducers/postListReducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
    posts: postListReducer
});

const store = createStore(reducer, compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;
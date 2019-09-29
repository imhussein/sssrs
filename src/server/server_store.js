import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../client/reducers";

const INITIAL_STATE = {};

const middleware = [thunk];

export default () => {
  return createStore(
    rootReducer,
    INITIAL_STATE,
    applyMiddleware(...middleware)
  );
};

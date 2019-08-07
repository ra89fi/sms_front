import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import studentReducer from "../reducers/student";
import authReducer from "../reducers/auth";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store;

export default () => {
  if (store) return store;
  else {
    store = createStore(
      combineReducers({
        student: studentReducer,
        auth: authReducer
      }),
      /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
    );
    return store;
  }
};

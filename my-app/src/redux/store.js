import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import backendReducer from "./reducers/backendReducer";
// Each reducer handles their own model

const rootReducer = combineReducers({
  backend: backendReducer,
});

const stateContainer = createStore(rootReducer, applyMiddleware(logger));

export default stateContainer;

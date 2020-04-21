import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

// Each reducer handles their own model

const rootReducer = combineReducers({});

const stateContainer = createStore(rootReducer, applyMiddleware(logger));

export default stateContainer;

import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import backendReducer from "./reducers/backendReducer";
import clientReducer from "./reducers/clientReducer";
import simulationReducer from "./reducers/simulationReducer";

// Each reducer handles their own model

const rootReducer = combineReducers({
  backend: backendReducer,
  client: clientReducer,
  simulation: simulationReducer,
});

const stateContainer = createStore(rootReducer, applyMiddleware(logger));
export default stateContainer;

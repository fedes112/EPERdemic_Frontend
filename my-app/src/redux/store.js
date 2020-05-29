import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import backendReducer from "./reducers/backendReducer";
import clientReducer from "./reducers/clientReducer";
import simulationReducer from "./reducers/simulationReducer";
import reportsReducer from "./reducers/reportsReducer";

// Each reducer handles their own model

const rootReducer = combineReducers({
  backend: backendReducer,
  client: clientReducer,
  simulation: simulationReducer,
  reports: reportsReducer,
});

const stateContainer = createStore(rootReducer, applyMiddleware(logger));
export default stateContainer;

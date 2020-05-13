import deepFreezeStrict from "deep-freeze-strict";
import { UPDATE_SIMULATION_STATE } from "../actions/simulationActions";

const simulationState = {
  started: false,
};

const simulationReducer = (state = simulationState, action) => {
  let newState;
  switch (action.type) {
    case UPDATE_SIMULATION_STATE:
      newState = { ...state, started: action.started };
      break;
    default:
      return state;
  }
  return deepFreezeStrict(newState);
};

export default simulationReducer;

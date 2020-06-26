import deepFreezeStrict from "deep-freeze-strict";
import {
  UPDATE_SIMULATION_STATE,
  UPDATE_SIMULATION_VELOCITY,
} from "../actions/simulationActions";

const simulationState = {
  started: false,
  velocity: 1,
};

const simulationReducer = (state = simulationState, action) => {
  let newState;
  switch (action.type) {
    case UPDATE_SIMULATION_STATE:
      newState = { ...state, started: action.started };
      break;
    case UPDATE_SIMULATION_VELOCITY:
      newState = { ...state, velocity: action.velocity };
      break;
    default:
      return state;
  }
  return deepFreezeStrict(newState);
};

export default simulationReducer;

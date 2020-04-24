import deepFreezeStrict from "deep-freeze-strict";
import { UPDATE_PATHOGENS_BACKEND } from "../actions/backendPathogensActions";

const backendState = {
  pathogens: {},
};

const backendReducer = (state = backendState, action) => {
  let newState;
  switch (action.type) {
    case UPDATE_PATHOGENS_BACKEND:
      newState = { ...state, pathogens: action.pathogens };
      break;
    default:
      return state;
  }
  return deepFreezeStrict(newState);
};

export default backendReducer;

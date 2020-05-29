import deepFreezeStrict from "deep-freeze-strict";
import {
  UPDATE_CLIENT_REPORTS,
  UPDATE_BACKEND_REPORTS,
} from "../actions/reportActions";

const reportsState = {
  clientReports: [],
  backendReports: [],
};

const reportsReducer = (state = reportsState, action) => {
  let newState;
  switch (action.type) {
    case UPDATE_CLIENT_REPORTS:
      newState = { ...state, clientReports: action.clientReports };
      break;
    case UPDATE_BACKEND_REPORTS:
      newState = { ...state, backendReports: action.backendReports };
      break;
    default:
      return state;
  }
  return deepFreezeStrict(newState);
};

export default reportsReducer;

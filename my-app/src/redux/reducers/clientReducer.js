import deepFreezeStrict from "deep-freeze-strict";
import { UPDATE_GROUP_NAME_CLIENT } from "../actions/clientGroupNameActions";

const clientState = {
  groupName: {},
};

const clientReducer = (state = clientState, action) => {
  let newState;
  switch (action.type) {
    case UPDATE_GROUP_NAME_CLIENT:
      newState = { ...state, groupName: action.groupName };
      break;
    default:
      return state;
  }
  return deepFreezeStrict(newState);
};

export default clientReducer;

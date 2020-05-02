import deepFreezeStrict from "deep-freeze-strict";
import { UPDATE_GROUP_NAME_CLIENT } from "../actions/clientGroupNameActions";
import { UPDATE_PATHOGENS_CLIENT } from "../actions/clientPathogensActions";

const clientState = {
  groupName: {},
  pathogens: [],
};

const clientReducer = (state = clientState, action) => {
  let newState;
  switch (action.type) {
    case UPDATE_GROUP_NAME_CLIENT:
      newState = { ...state, groupName: action.groupName };
      break;
    case UPDATE_PATHOGENS_CLIENT:
      newState = { ...state, pathogens: action.pathogens };
      break;
    default:
      return state;
  }
  return deepFreezeStrict(newState);
};

export default clientReducer;

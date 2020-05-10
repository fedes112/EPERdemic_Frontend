import deepFreezeStrict from "deep-freeze-strict";
import { UPDATE_GROUP_NAME_CLIENT } from "../actions/clientGroupNameActions";
import {
  UPDATE_PATHOGENS_CLIENT,
  UPDATE_UBICACION_CLIENT,
} from "../actions/clientPathogensActions";

const clientState = {
  groupName: {},
  pathogens: [],
  ubicaciones: [],
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
    case UPDATE_UBICACION_CLIENT:
      newState = { ...state, ubicaciones: action.ubicaciones };
      break;
    default:
      return state;
  }
  return deepFreezeStrict(newState);
};

export default clientReducer;

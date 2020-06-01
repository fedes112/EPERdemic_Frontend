import deepFreezeStrict from "deep-freeze-strict";
import { UPDATE_GROUP_NAME_CLIENT } from "../actions/clientGroupNameActions";
import { UPDATE_ESPECIES_LEADERBOARD_CLIENT } from "../actions/clientEspeciesLeaderboardActions";
import {
  UPDATE_PATHOGENS_CLIENT,
  UPDATE_UBICACION_CLIENT,
} from "../actions/clientPathogensActions";

const clientState = {
  groupName: {},
  pathogens: [],
  ubicaciones: [],
  especies_lideres: [],
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
    case UPDATE_ESPECIES_LEADERBOARD_CLIENT:
      newState = { ...state, especies_lideres: action.especies_lideres };
      break;
    default:
      return state;
  }
  return deepFreezeStrict(newState);
};

export default clientReducer;

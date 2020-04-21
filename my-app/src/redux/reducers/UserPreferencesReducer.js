/* import deepFreezeStrict from "deep-freeze-strict";
import { UPDATE_USER_NAME } from "../actions/UserNameActions";
import { UPDATE_SIZE } from "../actions/SizePreferencesActions";
import { UPDATE_USER_STATUS } from "../actions/UpdateUserStatusAction";


const userPreferencesInitialState = {
  userName: "pepe",
  fontSize: "small",
  userStatus: "offline"
};

const UserPreferencesReducer = (
  state = userPreferencesInitialState,
  action
) => {
  let newState;
  switch (action.type) {
    case UPDATE_USER_NAME:
      newState = { ...state, userName: action.userName };
      break;
    case UPDATE_SIZE:
      newState = { ...state, fontSize: action.fontSize };
      break;
    case UPDATE_USER_STATUS:
      newState = { ...state, userStatus: action.userStatus };
      break;
    default:
      return state;
  }
  return deepFreezeStrict(newState);
};

export default UserPreferencesReducer;
*/

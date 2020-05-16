import deepFreezeStrict from "deep-freeze-strict";
import { UPDATE_PATHOGENS_BACKEND } from "../actions/backendPathogensActions";
import { UPDATE_SELECTED_SPECIES_BACKEND } from "../actions/backendSpeciesActions";

const backendState = {
  pathogens: {},
  selected_species: {},
};

const backendReducer = (state = backendState, action) => {
  let newState;
  switch (action.type) {
    case UPDATE_PATHOGENS_BACKEND:
      newState = { ...state, pathogens: action.pathogens };
      break;
    case UPDATE_SELECTED_SPECIES_BACKEND:
      newState = { ...state, selected_species: action.specie };
      break;
    default:
      return state;
  }
  return deepFreezeStrict(newState);
};

export default backendReducer;

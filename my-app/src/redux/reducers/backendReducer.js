import deepFreezeStrict from "deep-freeze-strict";
import {
  UPDATE_PATHOGENS_BACKEND,
  SELECTED_PATHOGEN_BACKEND,
  CREATE_PATHOGEN_BACKEND,
} from "../actions/backendPathogensActions";
import { UPDATE_SELECTED_SPECIES_BACKEND } from "../actions/backendSpeciesActions";

const backendState = {
  pathogens: {},
  selected_species: {},
  selected_pathogen: {},
  pathogen_to_create: {},
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
    case SELECTED_PATHOGEN_BACKEND:
      newState = { ...state, selected_pathogen: action.pathogen };
      break;
    case CREATE_PATHOGEN_BACKEND:
      newState = { ...state, pathogen_to_create: action.pathogen };
      break;
    default:
      return state;
  }
  return deepFreezeStrict(newState);
};

export default backendReducer;

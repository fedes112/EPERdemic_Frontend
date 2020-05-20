export const UPDATE_PATHOGENS_BACKEND = "UPDATE_PATHOGENS_BACKEND";
export const SELECTED_PATHOGEN_BACKEND = "SELECTED_PATHOGEN_BACKEND";
export const CREATE_PATHOGEN_BACKEND = "CREATE_PATHOGEN_BACKEND";

export const updatePathogens = (pathogens) => {
  return {
    type: UPDATE_PATHOGENS_BACKEND,
    pathogens,
  };
};

export const updateSelectedPathogen = (pathogen) => {
  return {
    type: SELECTED_PATHOGEN_BACKEND,
    pathogen,
  };
};

export const updateToCreatePathogen = (pathogen) => {
  return {
    type: CREATE_PATHOGEN_BACKEND,
    pathogen,
  };
};

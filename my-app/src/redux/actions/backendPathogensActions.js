export const UPDATE_PATHOGENS_BACKEND = "UPDATE_PATHOGENS_BACKEND";

export const updatePathogens = (pathogens) => {
  return {
    type: UPDATE_PATHOGENS_BACKEND,
    pathogens,
  };
};

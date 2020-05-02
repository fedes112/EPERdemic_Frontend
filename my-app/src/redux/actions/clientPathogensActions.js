export const UPDATE_PATHOGENS_CLIENT = "UPDATE_PATHOGENS_CLIENT";

export const updatePathogensList = (pathogens) => {
  return {
    type: UPDATE_PATHOGENS_CLIENT,
    pathogens,
  };
};

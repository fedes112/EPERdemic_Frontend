export const UPDATE_SELECTED_SPECIES_BACKEND =
  "UPDATE_SELECTED_SPECIES_BACKEND";

export const updateSelectedSpecies = (specie) => {
  return {
    type: UPDATE_SELECTED_SPECIES_BACKEND,
    specie,
  };
};

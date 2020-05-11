export const UPDATE_PATHOGENS_CLIENT = "UPDATE_PATHOGENS_CLIENT";
export const UPDATE_UBICACION_CLIENT = "UPDATE_UBICACION_CLIENT";

export const updatePathogensList = (pathogens) => {
  return {
    type: UPDATE_PATHOGENS_CLIENT,
    pathogens,
  };
};

export const updateUbicacionList = (ubicaciones) => {
  return {
    type: UPDATE_UBICACION_CLIENT,
    ubicaciones,
  };
};

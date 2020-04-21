export const enrichPathogen = (pathogenReturned, groupName) => {
  return {
    patogenoId: { groupName, id: pathogenReturned.id },
    cantidadDeEspecies: pathogenReturned.cantidadDeEspecies,
    tipo: pathogenReturned.tipo,
  };
};

export const placeholder = () => {
  return {};
};

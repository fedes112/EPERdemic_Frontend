export const UPDATE_SIMULATION_STATE = "UPDATE_SIMULATION_STATE";

export const updateSimulationState = (started) => {
  return {
    type: UPDATE_SIMULATION_STATE,
    started,
  };
};

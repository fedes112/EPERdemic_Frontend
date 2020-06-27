export const UPDATE_SIMULATION_STATE = "UPDATE_SIMULATION_STATE";
export const UPDATE_SIMULATION_VELOCITY = "UPDATE_SIMULATION_VELOCITY";

export const updateSimulationState = (started) => {
  return {
    type: UPDATE_SIMULATION_STATE,
    started,
  };
};

export const updateSimulationVelocity = (velocity) => {
  return {
    type: UPDATE_SIMULATION_VELOCITY,
    velocity,
  };
};

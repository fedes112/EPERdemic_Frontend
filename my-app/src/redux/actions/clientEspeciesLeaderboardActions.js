export const UPDATE_ESPECIES_LEADERBOARD_CLIENT =
  "UPDATE_ESPECIES_LEADERBOARD_CLIENT";

export const updateEspeciesLeaderBoard = (especies_lideres) => {
  return {
    type: UPDATE_ESPECIES_LEADERBOARD_CLIENT,
    especies_lideres,
  };
};

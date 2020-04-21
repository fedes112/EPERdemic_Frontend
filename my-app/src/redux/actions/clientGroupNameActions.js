export const UPDATE_GROUP_NAME_CLIENT = "UPDATE_GROUP_NAME_CLIENT";

export const updateGroupName = (groupName) => {
  return {
    type: UPDATE_GROUP_NAME_CLIENT,
    groupName,
  };
};

export const UPDATE_CLIENT_REPORTS = "UPDATE_CLIENT_REPORTS";
export const UPDATE_BACKEND_REPORTS = "UPDATE_BACKEND_REPORTS";

export const updateClientReports = (clientReports) => {
  return {
    type: UPDATE_CLIENT_REPORTS,
    clientReports,
  };
};

export const updateBackendReports = (backendReports) => {
  return {
    type: UPDATE_BACKEND_REPORTS,
    backendReports,
  };
};

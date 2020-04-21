import React from "react";
import { Provider } from "react-redux";
import stateContainer from "../redux/store";
import App from "./App";
import useBackendSynchronization from "../redux/enrichers/backendSynchHook";
import useClientFetchedData from "../redux/enrichers/clientFetchedDataHook";

const AppStoreEnricherWrapper = () => {
  useBackendSynchronization();
  useClientFetchedData();
  return <App />;
};

const AppReduxProviderWrapper = () => (
  <Provider store={stateContainer}>
    <AppStoreEnricherWrapper />
  </Provider>
);

export default AppReduxProviderWrapper;

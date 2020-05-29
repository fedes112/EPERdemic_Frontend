import React from "react";
import { Provider } from "react-redux";
import stateContainer from "../redux/store";
import App from "./App";
import useBackendSynchronization from "../redux/enrichers/backendSynchHook";
import useClientSynchronization from "../redux/enrichers/clientSynchHook";

const AppClientStoreEnricherWrapper = () => {
  useBackendSynchronization();
  return <App />;
};

const AppStoreEnricherWrapper = () => {
  useClientSynchronization();
  return <AppClientStoreEnricherWrapper />;
};

const AppReduxProviderWrapper = () => (
  <Provider store={stateContainer}>
    <AppStoreEnricherWrapper />
  </Provider>
);

export default AppReduxProviderWrapper;

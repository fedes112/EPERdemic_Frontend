import React from "react";
import { Provider } from "react-redux";
import stateContainer from "../redux/store";
import BackendStoreSynchronizer from "./backendSynchronizer";
import ClientStoreEnricher from "./clientStoreEnricher";
import App from "./App";

function AppReduxWrapper() {
  return (
    <Provider store={stateContainer}>
      <BackendStoreSynchronizer />
      <ClientStoreEnricher />
      <App />
    </Provider>
  );
}

export default AppReduxWrapper;

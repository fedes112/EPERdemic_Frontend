import React from "react";
import { Provider } from "react-redux";
import stateContainer from "../redux/store";
import BackendSynchronizer from "./backendSynchronizer";

function AppReduxWrapper() {
  return (
    <Provider store={stateContainer}>
      <BackendSynchronizer />
    </Provider>
  );
}

export default AppReduxWrapper;

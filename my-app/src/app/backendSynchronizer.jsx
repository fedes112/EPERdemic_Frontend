import React from "react";
import { connect } from "react-redux";
import { BACKEND_SERVER } from "../commons/enums/enums";
import { useGet } from "../hooks/useFetch";
import App from "./App";
import { updatePathogens } from "../redux/actions/backendPathogensActions";
import useInterval from "../hooks/useInterval";

const CALL_ALWAYS = () => true;

function BackendSynchronizer({ dispatchPathogens }) {
  const getPathogens = useGet(BACKEND_SERVER, "/patogeno", dispatchPathogens);
  useInterval(getPathogens, CALL_ALWAYS, 3000);

  return <App />;
}

const dispatchPathogens = (dispatch) => (pathogens) => {
  dispatch(updatePathogens(pathogens));
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchPathogens: dispatchPathogens(dispatch),
  };
};

export default connect(() => {}, mapDispatchToProps)(BackendSynchronizer);

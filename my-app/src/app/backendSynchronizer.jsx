import React from "react";
import { connect } from "react-redux";
import { BACKEND_SERVER } from "../commons/enums/enums";
import { useGet } from "../commons/hooks/useFetch";
import { updatePathogens } from "../redux/actions/backendPathogensActions";
import useInterval from "../commons/hooks/useInterval";

const CALL_ALWAYS = () => true;

function BackendStoreSynchronizer({ dispatchPathogens }) {
  const getPathogens = useGet(BACKEND_SERVER, "/patogeno", dispatchPathogens);
  useInterval(getPathogens, CALL_ALWAYS, 5000);
  return React.Fragment;
}

const dispatchPathogens = (dispatch) => (pathogens) => {
  dispatch(updatePathogens(pathogens));
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchPathogens: dispatchPathogens(dispatch),
  };
};

export default connect(() => {}, mapDispatchToProps)(BackendStoreSynchronizer);

import React from "react";
import { connect } from "react-redux";
import { CLIENT_SERVER } from "../commons/enums/enums";
import { useGet } from "../commons/hooks/useFetch";
import { updateGroupName } from "../redux/actions/clientGroupNameActions";
import useTimeout from "../commons/hooks/useTimeOut";

const CALL_ALWAYS = () => true;

function ClientStoreEnricher({ dispatchGroupName }) {
  const getGroupName = useGet(CLIENT_SERVER, "/group", dispatchGroupName);
  useTimeout(getGroupName, CALL_ALWAYS, 100);
  return React.Fragment;
}

const dispatchGroupName = (dispatch) => (groupName) => {
  dispatch(updateGroupName(groupName));
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchGroupName: dispatchGroupName(dispatch),
  };
};

export default connect(() => {}, mapDispatchToProps)(ClientStoreEnricher);

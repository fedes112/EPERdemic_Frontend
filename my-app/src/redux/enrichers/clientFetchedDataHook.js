import { useGet } from "../../commons/hooks/useFetch";
import useTimeout from "../../commons/hooks/useInterval";
import { updateGroupName } from "../actions/clientGroupNameActions";
import { updatePathogensList } from "../actions/clientPathogensActions";
import { CLIENT_SERVER } from "../../commons/enums/enums";
import useFetchAndDispatch from "../../commons/hooks/useFetchAndDispatch";
import useInterval from "../../commons/hooks/useInterval";

const CALL_ALWAYS = () => true;

const useFetchClientDataToStore = (path, action, timedFunction) => {
  const getAndEnrich = useFetchAndDispatch(useGet, CLIENT_SERVER, path, action);
  timedFunction(getAndEnrich, CALL_ALWAYS, 5000);
};

const useClientFetchedData = () => {
  useFetchClientDataToStore("/patogeno", updatePathogensList, useInterval);
  useFetchClientDataToStore("/group", updateGroupName, useTimeout);
};

export default useClientFetchedData;

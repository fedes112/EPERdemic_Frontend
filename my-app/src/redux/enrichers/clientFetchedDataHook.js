import { useGet } from "../../commons/hooks/useFetch";
import useTimeout from "../../commons/hooks/useTimeOut";
import { updateGroupName } from "../actions/clientGroupNameActions";
import { CLIENT_SERVER } from "../../commons/enums/enums";
import useFetchAndDispatch from "../../commons/hooks/useFetchAndDispatch";

const CALL_ALWAYS = () => true;

const useFetchClientDataToStore = (path, action) => {
  const getAndEnrich = useFetchAndDispatch(useGet, CLIENT_SERVER, path, action);
  useTimeout(getAndEnrich, CALL_ALWAYS, 1);
};

const useClientFetchedData = () => {
  useFetchClientDataToStore("/group", updateGroupName);
};

export default useClientFetchedData;

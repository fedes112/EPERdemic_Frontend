import { useGet } from "../../commons/hooks/useFetch";
import useInterval from "../../commons/hooks/useInterval";
import { updatePathogens } from "../actions/backendPathogensActions";
import { BACKEND_SERVER } from "../../commons/enums/enums";
import useFetchAndDispatch from "../../commons/hooks/useFetchAndDispatch";

const CALL_ALWAYS = () => true;

const useSyncBackendToStore = (path, action) => {
  const getAndSync = useFetchAndDispatch(useGet, BACKEND_SERVER, path, action);
  useInterval(getAndSync, CALL_ALWAYS, 5000);
};

const useBackendSynchronization = () => {
  useSyncBackendToStore("/patogeno", updatePathogens);
};

export default useBackendSynchronization;

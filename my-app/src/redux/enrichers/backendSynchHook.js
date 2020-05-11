import { useGet, NO_SUCCESS_MESSAGE } from "../../commons/hooks/useFetch";
import useInterval from "../../commons/hooks/useInterval";
import { updatePathogens } from "../actions/backendPathogensActions";
import { BACKEND_SERVER } from "../../commons/enums/enums";
import useFetchAndDispatch from "../../commons/hooks/useFetchAndDispatch";

const CALL_ALWAYS = () => true;

const useSyncBackendToStore = (
  path,
  action,
  successMessage,
  errorMessage,
  timedFunction
) => {
  const getAndSync = useFetchAndDispatch(
    useGet,
    successMessage,
    errorMessage,
    BACKEND_SERVER,
    path,
    action
  );
  timedFunction(getAndSync, CALL_ALWAYS, 5000);
};

const useBackendSynchronization = () => {
  useSyncBackendToStore(
    "/patogeno",
    updatePathogens,
    NO_SUCCESS_MESSAGE,
    "No se consiguieron patogenos del servidor Backend",
    useInterval
  );
};

export default useBackendSynchronization;

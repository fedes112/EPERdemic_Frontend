import { useGet, NO_SUCCESS_MESSAGE } from "../../commons/hooks/useFetch";
import { updateGroupName } from "../actions/clientGroupNameActions";
import {
  updatePathogensList,
  updateUbicacionList,
} from "../actions/clientPathogensActions";
import { CLIENT_SERVER } from "../../commons/enums/enums";
import useFetchAndDispatch from "../../commons/hooks/useFetchAndDispatch";
import useInterval from "../../commons/hooks/useInterval";

const CALL_ALWAYS = () => true;

const useFetchClientDataToStore = (
  path,
  action,
  successMessage,
  errorMessage,
  timedFunction
) => {
  const getAndEnrich = useFetchAndDispatch(
    useGet,
    successMessage,
    errorMessage,
    CLIENT_SERVER,
    path,
    action
  );
  if (timedFunction) {
    timedFunction(getAndEnrich, CALL_ALWAYS, 5000);
  } else {
    getAndEnrich();
  }
};

const useClientFetchedData = () => {
  useFetchClientDataToStore(
    "/patogeno",
    updatePathogensList,
    NO_SUCCESS_MESSAGE,
    "No se consiguieron patogenos del cliente backend",
    useInterval
  );
  useFetchClientDataToStore(
    "/group",
    updateGroupName,
    "Nombre del grupo cargado",
    "No se pudo conseguir el nombre del grupo"
  );
  useFetchClientDataToStore(
    "/ubicacion",
    updateUbicacionList,
    "Ubicaciones cargadas",
    "No se consiguieron ubicaciones del cliente backend"
  );
};

export default useClientFetchedData;

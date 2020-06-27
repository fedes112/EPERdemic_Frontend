import { useEffect, useState } from "react";
import {
  useGet,
  usePost,
  NO_SUCCESS_MESSAGE,
} from "../../commons/hooks/useFetch";
import { useStore } from "react-redux";
import useInterval from "../../commons/hooks/useInterval";
import { updatePathogens } from "../actions/backendPathogensActions";
import { updateBackendReports } from "../actions/reportActions";
import { BACKEND_SERVER } from "../../commons/enums/enums";
import useFetchAndDispatch from "../../commons/hooks/useFetchAndDispatch";
import { isEmpty } from "lodash";

const useSyncBackendToStore = (
  actionType,
  path,
  action,
  successMessage,
  errorMessage,
  timedFunction
) => {
  const store = useStore();
  const wasAbleToConnectToClient = () =>
    !isEmpty(store.getState().client.groupName);

  const sync = useFetchAndDispatch(
    actionType,
    successMessage,
    errorMessage,
    BACKEND_SERVER,
    path,
    action
  );
  timedFunction(sync, wasAbleToConnectToClient, 10000);
};

/* eslint-disable react-hooks/exhaustive-deps */
const useSyncStoreToBackend = (path, successMessage, errorMessage) => {
  const store = useStore();
  const wasAbleToConnectToClient = () =>
    !isEmpty(store.getState().client.groupName);

  const [clientData, setClientData] = useState();

  const sendData = usePost(
    BACKEND_SERVER,
    successMessage,
    errorMessage,
    path,
    () => {},
    clientData
  );

  useEffect(() => {
    if (!clientData) return;
    sendData();
  }, [clientData]);

  const interval = () =>
    setInterval(() => {
      if (
        !isEmpty(store.getState().reports.clientReports) &&
        wasAbleToConnectToClient()
      ) {
        setClientData(store.getState().reports.clientReports);
      }
    }, 10000);

  useEffect(() => {
    const id = interval();
    return () => clearInterval(id);
  });
};

const useBackendSynchronization = () => {
  useSyncBackendToStore(
    useGet,
    "/patogeno",
    updatePathogens,
    NO_SUCCESS_MESSAGE,
    "No se consiguieron patogenos del servidor Backend",
    useInterval
  );
  useSyncBackendToStore(
    useGet,
    "/reportes",
    updateBackendReports,
    NO_SUCCESS_MESSAGE,
    "No se pudieron conseguir los reportes del servidor Backend",
    useInterval
  );

  useSyncStoreToBackend(
    "/reportes",
    NO_SUCCESS_MESSAGE,
    "No se pudo enviar los reportes de contagio al servidor Backend"
  );
};

export default useBackendSynchronization;

import { useStore } from "react-redux";
import { useEffect } from "react";
import {
  useGet,
  usePut,
  NO_SUCCESS_MESSAGE,
} from "../../commons/hooks/useFetch";
import { updateGroupName } from "../actions/clientGroupNameActions";
import { updateClientReports } from "../actions/reportActions";
import { updateEspeciesLeaderBoard } from "../actions/clientEspeciesLeaderboardActions";
import {
  updatePathogensList,
  updateUbicacionList,
} from "../actions/clientPathogensActions";
import { CLIENT_SERVER } from "../../commons/enums/enums";
import useFetchAndDispatch from "../../commons/hooks/useFetchAndDispatch";
import useInterval from "../../commons/hooks/useInterval";
import { isEmpty } from "lodash";
import setDynterval from "dynamic-interval";

const CALL_ALWAYS = () => true;

const useFetchClientDataToStore = (
  path,
  action,
  condition,
  successMessage,
  errorMessage,
  timeout,
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
    timedFunction(getAndEnrich, condition, timeout);
  } else {
    if (condition()) {
      getAndEnrich();
    }
  }
};

const useClientDataSynchronization = () => {
  const store = useStore();
  const wasAbleToConnectToClient = () =>
    !isEmpty(store.getState().client.groupName);

  useFetchClientDataToStore(
    "/group",
    updateGroupName,
    CALL_ALWAYS,
    NO_SUCCESS_MESSAGE,
    "No se pudo conectar al cliente y obtener el nombre del grupo. Intentando de vuelta...",
    5000,
    useInterval
  );

  useFetchClientDataToStore(
    "/patogeno",
    updatePathogensList,
    wasAbleToConnectToClient,
    NO_SUCCESS_MESSAGE,
    "No se consiguieron patogenos del cliente backend",
    5000,
    useInterval
  );
  useFetchClientDataToStore(
    "/estadisticas/reporteDeContagios",
    updateClientReports,
    wasAbleToConnectToClient,
    NO_SUCCESS_MESSAGE,
    "No se consiguieron reportes de contagio del cliente backend",
    5000,
    useInterval
  );

  useFetchClientDataToStore(
    "/ubicacion",
    updateUbicacionList,
    wasAbleToConnectToClient,
    NO_SUCCESS_MESSAGE,
    "No se consiguieron ubicaciones del cliente backend",
    10000,
    useInterval
  );

  useFetchClientDataToStore(
    "/estadisticas/lideres",
    updateEspeciesLeaderBoard,
    wasAbleToConnectToClient,
    NO_SUCCESS_MESSAGE,
    "No se consiguieron especies lideres del cliente backend",
    10000,
    useInterval
  );
};
/*
const useIntervalCallsToClient = () => {
  const store = useStore();
  const callOnlyIfSimulationStarted = () => store.getState().simulation.started;

  useInterval(
    usePut(
      CLIENT_SERVER,
      NO_SUCCESS_MESSAGE,
      "No se pudo pedir expansion de especies al cliente backend",
      "/ubicacion/expandir"
    ),
    callOnlyIfSimulationStarted,
    5000
  );
};*/

const velocityToMiliseconds = {
  1: 10000,
  2: 7500,
  3: 5000,
  4: 2500,
  5: 1500,
};

export const useIntervalCallsToClient = () => {
  const store = useStore();
  const sendData = usePut(
    CLIENT_SERVER,
    NO_SUCCESS_MESSAGE,
    "No se pudo pedir expansion de especies al cliente backend",
    "/ubicacion/expandir"
  );

  const getVelocity = (velocity) => velocityToMiliseconds[velocity];

  const dynterval = setDynterval((context) => {
    if (store.getState().simulation.started) {
      sendData();
    }
    const next = getVelocity(store.getState().simulation.velocity);
    console.log("Repeating Expansion call in... ", next);
    return { ...context, wait: next };
  });
  useEffect(() => {
    return () => dynterval.clear();
  });
};

const useClientSynchronization = () => {
  useClientDataSynchronization();
  useIntervalCallsToClient();
};

export default useClientSynchronization;

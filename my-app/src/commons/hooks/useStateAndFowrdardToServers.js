/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import useIdEnricher from "./useIdEnricher";
import { usePost } from "./useFetch";
import { BACKEND_SERVER, CLIENT_SERVER } from "../enums/enums";

const useStateAndForwardToServers = (path) => {
  const [data, setData] = useState();
  const [dataReturned, setDataReturned] = useState();
  const [dataIdEnriched, setDataIdEnriched] = useState();
  const idEnricher = useIdEnricher();

  const sendData = usePost(CLIENT_SERVER, path, setDataReturned, data);

  const sendDataToBackend = usePost(
    BACKEND_SERVER,
    path,
    () => {},
    dataIdEnriched
  );

  useEffect(() => {
    if (!data) return;
    sendData();
  }, [data]);

  useEffect(() => {
    if (!dataReturned) return;
    setDataIdEnriched(idEnricher(dataReturned));
  }, [dataReturned]);

  useEffect(() => {
    if (!dataIdEnriched) return;
    sendDataToBackend();
  }, [dataIdEnriched]);

  return [data, setData];
};

export default useStateAndForwardToServers;

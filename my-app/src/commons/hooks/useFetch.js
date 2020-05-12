import axios from "axios";
import { toast } from "react-toastify";

const servers = Object.freeze({
  CLIENT_SERVER: "http://localhost:8080",
  BACKEND_SERVER: "https://eperdemic-backend.herokuapp.com",
});

// If developing Locally, use this URL for backendServer
// "https://cors-anywhere.herokuapp.com/https://eperdemic-backend.herokuapp.com",

export const NO_SUCCESS_MESSAGE = "No success message";

const useFetch = (
  server,
  fetch,
  msgOnSuccess,
  msgOnError,
  [path, setData = () => {}, body = {}]
) => {
  const logError = (err) => {
    toast.error(msgOnError);
    throw err;
  };

  const toastSuccess = (msg) => {
    if (msg !== NO_SUCCESS_MESSAGE) toast(msg);
  };

  const URL = () => `${servers[server]}${path}`;
  return () =>
    fetch(URL(), body)
      .then((r) => r.data)
      .then(setData)
      .then(() => toastSuccess(msgOnSuccess))
      .catch(logError);
};

const useGet = (server, msgOnSuccess, msgOnError, ...args) =>
  useFetch(server, axios.get, msgOnSuccess, msgOnError, args);

const usePost = (server, msgOnSuccess, msgOnError, ...args) =>
  useFetch(server, axios.post, msgOnSuccess, msgOnError, args);

const usePut = (server, msgOnSuccess, msgOnError, ...args) =>
  useFetch(server, axios.put, msgOnSuccess, msgOnError, args);

export { useGet, usePut, usePost };

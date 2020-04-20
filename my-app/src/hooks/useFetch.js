import axios from "axios";

const servers = Object.freeze({
  CLIENT_SERVER: "http://localhost:8080",
  BACKEND_SERVER:
    "https://cors-anywhere.herokuapp.com/http://eperdemic-backend.herokuapp.com",
});

const useFetch = (server, fetch, [path, setData = () => {}, body = {}]) => {
  const logError = (err) => {
    console.error(err.response);
    throw err;
  };

  const URL = () => `${servers[server]}${path}`;
  return () =>
    fetch(URL(), body)
      .then((r) => r.data)
      .then(setData)
      .catch(logError);
};

const useGet = (server, ...args) => useFetch(server, axios.get, args);

const usePost = (server, ...args) => useFetch(server, axios.post, args);

const usePut = (server, ...args) => useFetch(server, axios.put, args);

export { useGet, usePut, usePost };

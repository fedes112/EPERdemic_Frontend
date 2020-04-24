import axios from "axios";

const servers = Object.freeze({
  CLIENT_SERVER: "http://localhost:8080",
  BACKEND_SERVER: "https://eperdemic-backend.herokuapp.com",
});

// If developing Locally, use this URL for backendServer
// "https://cors-anywhere.herokuapp.com/https://eperdemic-backend.herokuapp.com",

const useFetch = (server, fetch, [path, setData = () => {}, body = {}]) => {
  const logError = (err) => {
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
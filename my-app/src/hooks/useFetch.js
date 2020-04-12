import { useState, useEffect } from 'react';
import axios from 'axios';

const server = "localhost que usemos por ahora";

const useFetch = (fetch, [path, setData = () => {}, body = {}]) => {

  const logError = (err) => {
    console.error(err.response);
    throw err;
  };

  const URL = () => `${server}${path}`;
  return () => fetch(URL(), body)
    .then(r => r.data)
    .catch(logError);
};

const useGet = (path, initial = {}, onError = () => {}) => {
  const [data, setData] = useState(initial);
  const fetch = useFetch(axios.get, [path, setData]);

  useEffect(() => {
    if (path) fetch().catch(onError);
  }, []); 
  return [data, setData];
};

const usePut = (...args) => useFetch(axios.put, args);
const usePost = (...args) => useFetch(axios.post, args);

export { useGet, usePut, usePost };

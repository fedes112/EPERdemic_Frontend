import { useEffect } from "react";

const useTimeout = (callback, predicate, delay) => {
  const timeOut = () =>
    setTimeout(() => {
      if (predicate()) {
        callback();
      }
    }, delay);

  useEffect(() => {
    const id = timeOut();
    return () => clearTimeout(id);
  });
};

export default useTimeout;

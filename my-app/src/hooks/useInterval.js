import { useEffect } from "react";

const useInterval = (callback, predicate, delay) => {
  const interval = () =>
    setInterval(() => {
      if (predicate()) {
        callback();
      }
    }, delay);

  useEffect(() => {
    const id = interval();
    return () => clearInterval(id);
  });
};

export default useInterval;

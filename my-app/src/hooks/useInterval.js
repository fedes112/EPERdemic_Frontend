import { useEffect } from "react";

const useInterval = (callback, predicate, delay) => {
  const timeOut = () =>
    setTimeout(() => {
      if (predicate()) {
        callback();
      }
    }, delay);

  useEffect(() => {
    const id = timeOut();
    return () => clearInterval(id);
  });
};

export default useInterval;

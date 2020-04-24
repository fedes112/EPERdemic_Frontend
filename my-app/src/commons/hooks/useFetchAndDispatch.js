import { useDispatch } from "react-redux";

const useFetchAndDispatch = (fetchFunction, server, path, action) => {
  const dispatch = useDispatch();

  const dispatchAction = (data) => dispatch(action(data));
  return fetchFunction(server, path, dispatchAction);
};

export default useFetchAndDispatch;

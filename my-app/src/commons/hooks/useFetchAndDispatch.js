import { useDispatch } from "react-redux";

const useFetchAndDispatch = (
  fetchFunction,
  successMessage,
  errorMessage,
  server,
  path,
  action
) => {
  const dispatch = useDispatch();

  const dispatchAction = (data) => dispatch(action(data));
  return fetchFunction(
    server,
    successMessage,
    errorMessage,
    path,
    dispatchAction
  );
};

export default useFetchAndDispatch;

import { useStore } from "react-redux";

const useIdEnricher = () => {
  const store = useStore();
  const { groupName } = store.getState().client;
  return (data) => ({
    ...data,
    id: { groupName, id: data.id },
  });
};

export default useIdEnricher;

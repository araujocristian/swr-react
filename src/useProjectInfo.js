import axios from "axios";
import useSWR from "swr";

const fetcher = async (...params) => {
  const response = await axios.get(...params);
  return response.data;
};

export const useProjectInfo = () => {
  const { data, error } = useSWR(
    "https://api.github.com/repos/facebook/react",
    fetcher
  );

  return {
    isLoading: !data && !error,
    data,
    error,
  };
};

import { fetcher } from "@/libs/fetcher";
import useSWR from "swr";

const usePoolDetails = () => {
  const url = "/api/poolDetails";
  const { data, error, mutate } = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading: !error && !data,
    mutate,
  };
};

export default usePoolDetails;
;

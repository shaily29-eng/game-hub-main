import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T> { // games and genre:adding generic type parameter(T) to this interface
  count: number;
  results: T[];
}

//generic type parameter <T> for fetching games and genre as common
//?: --this is for the optional parameter(if declared , so all following parameters are optional )
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => { //using effect hook to fetch data from server
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
        setLoading(false);
      });

    return () => controller.abort();
  }, deps ? [...deps] : []); //passing array of dependencies: so that every time we select genre,it fetches 

  return { data, error, isLoading }; //returning objects from hook //data here is games,genres to be fetched!
};

export default useData;

//component knows abuout endpoints :so avioding duplicacy 
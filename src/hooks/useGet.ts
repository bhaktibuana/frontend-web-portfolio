import apiUrl from "../configs/api.config";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const { apiV1 } = apiUrl();

const useGet = (
  queryKey: string,
  url: string,
  queryParams: object | null = null
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
    params: queryParams,
  };

  const responseGetData = useQuery({
    queryKey: [queryKey],
    queryFn: () =>
      axios.get(`${apiV1}${url}`, config).then((res) => res.data[0]),
  });

  if (process.env.NODE_ENV === "development" && responseGetData.data) {
    console.log(`[${queryKey}]`, responseGetData.data);
  }

  if (process.env.NODE_ENV === "development" && responseGetData.isError) {
    console.log(`[${queryKey} ERROR]`, responseGetData.error);
  }

  return responseGetData;
};

export default useGet;

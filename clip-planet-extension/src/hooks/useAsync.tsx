import { AxiosResponse } from "axios";
import { useEffect, useReducer } from "react";
import { ApiStatusReducer } from "./reducer/ApiReducer";

interface AsyncProps<T> {
  callback: (param?: any) => Promise<T>;
  deps?: [];
  skip: boolean;
}

const useAsync = function <T>({ callback, deps = [], skip }: AsyncProps<T>) {
  const [state, dispatch] = useReducer(ApiStatusReducer, {
    loading: false,
    data: null,
    error: false,
  });

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    try {
      const data = await callback();
      dispatch({ type: "SUCCESS", data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    if (!skip) fetchData();
  }, deps);

  return { state, refetch: fetchData };
};

export default useAsync;

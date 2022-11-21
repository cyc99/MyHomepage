import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_BASE_URI } from "../config";

const useFetch = (initValue, failValue, initPath) => {
  const [path, setPath] = useState(initPath);
  const [value, setValue] = useState(initValue);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (headers) => {
    axios
      .get(path, {
        baseURL: BACKEND_BASE_URI,
        headers: headers,
        timeout: 3000,
      })
      .then((resp) => {
        if (resp.data.length === 0) {
          setValue(initValue);
        } else {
          setValue(resp.data);
        }
      })
      .catch(() => setValue(failValue));
  };

  return [value, fetchData, setPath];
};

const axiosAPI = (path, data, method, headers, successFunc, failFunc) => {
  const postData = async () => {
    axios({
      url: path,
      method: method,
      baseURL: BACKEND_BASE_URI,
      data: data,
      headers: headers,
      timeout: 3000,
    })
      .then(successFunc)
      .catch(failFunc);
  };
  postData();
};

export { useFetch, axiosAPI };

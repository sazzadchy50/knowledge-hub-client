import axios from "axios";

const instance = axios.create({
  // baseURL: "https://knowledge-hub-server-hazel.vercel.app/api/v1",
  baseURL: "https://knowledge-hub-server-hazel.vercel.app/api/v1",
  withCredentials: true,
});

const useAxios = () => {
  return instance;
};

export default useAxios;

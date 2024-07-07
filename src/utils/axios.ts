import { getAccessTokenApi } from "@/services/authApi";
import axios from "axios";
const Axios = axios.create({
  baseURL: "http://185.8.174.74:8000",
});

Axios.interceptors.request.use(
  async (req) => {
    req.headers["Token"] = localStorage.getItem("accessToken");
    return req;
  },
  (error) => {
    Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error?.config;
    if (
      (error?.response?.status === 403 || error?.response?.status === 401) &&
      !prevRequest?.sent
    ) {
      prevRequest.sent = true;
      const data = await getAccessTokenApi(
        localStorage.getItem("refreshToken") || ""
      );
      const token = data.data.data.accessToken;

      //set new token
      localStorage.setItem("accessToken", token);
      axios.defaults.headers.common["Token"] = token;

      return Axios(prevRequest);
    }
    return Promise.reject(error);
  }
);
export default Axios;

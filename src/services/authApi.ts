import Axios from "@/utils/axios";

const loginApi = async (body: { username: string; password: string }) => {
  const res = await Axios.post("/accounts/login", body);
  return res.data;
};

const registerApi = async (body: {
  username: string;
  email: string;
  password: string;
}) => {
  const res = await Axios.post("/accounts", body);
  return res.data;
};

const forgetPasswordApi = async (body: { email: string }) => {
  const res = await Axios.post("/accounts/reset-password", body);
  return res.data;
};
const resetPasswordApi = async (body: {
  password: string;
  password1: string;
}) => {
  const res = await Axios.post("/accounts/reset-password/set-password/", body);
  return res.data;
};

const getAccessTokenApi = async (rToken: string) => {
  const res = await Axios.post("/accounts/refresh", {
    refresh: rToken,
  });
  return res.data;
};
export {
  getAccessTokenApi,
  forgetPasswordApi,
  loginApi,
  registerApi,
  resetPasswordApi,
};

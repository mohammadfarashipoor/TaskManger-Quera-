import Axios from "@/utils/axios";

const getAllAccountsApi = async () => {
  const res = await Axios.get(`/account/`);
  return res.data;
};

const getAccountApi = async (accountId: string) => {
  const res = await Axios.get(`/account/${accountId}/`);
  return res.data;
};
const updadteAccountApi = async (accountId: string, body: userTaskBody) => {
  const res = await Axios.patch(`/account/${accountId}/`, body);
  return res.data;
};

const deleteAccountApi = async (accountId: string) => {
  const res = await Axios.delete(`/account/${accountId}/`);
  return res.data;
};
const getSettingApi = async () => {
  const res = await Axios.get(`/setting/`);
  return res.data;
};
const updateSettingApi = async (body: { theme: string }) => {
  const res = await Axios.post(`/setting/`, body);
  return res.data;
};
const changePasswordApi = async(userData:any)=>{
  const res = await Axios.put(`/accounts/change-password/`,userData)
  return res.data
}
export {
  getAllAccountsApi,
  getAccountApi,
  updateAccountApi,
  deleteAccountApi,
  getSettingApi,
  updateSettingApi,
  changePasswordApi,
};

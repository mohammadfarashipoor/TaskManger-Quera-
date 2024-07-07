import Axios from "@/utils/axios";

type updateUserBody = {
  username?: string;
  email?: string;
  profile_url?: string;
  phone?: string;
  firstname?: string;
  lastname?: string;
};
const getUserApi = async (userId: string) => {
  const res = await Axios.get(`users/${userId}`);
  return res.data;
};

const updateUserInfoApi = async (userId: string, body: updateUserBody) => {
  const res = await Axios.put(`users/${userId}`, body);
  return res.data;
};

export { updateUserInfoApi, getUserApi };

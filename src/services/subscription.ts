import Axios from "@/utils/axios";

const createSubscription = async (body: {
  workspace: number;
  email: string;
}) => {
  const res = await Axios.post(`/workspaces/subscriptions/`, body);
  return res.data;
};
const changeSubscription = async (body: { workspace: number }) => {
  const res = await Axios.post(`/workspaces/subscriptions/`, body);
  return res.data;
};
const getSubscription = async (token: string) => {
  const res = await Axios.get(`/workspaces/subscriptions/${token}/`);
  return res.data;
};
export { getSubscription, changeSubscription, createSubscription };

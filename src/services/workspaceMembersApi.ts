import Axios from "@/utils/axios";
interface workspaceMembers extends userTaskBody {
  is_super_access: boolean;
}
const getAllWorkspacetMembersApi = async (workspaceId: string) => {
  const res = await Axios.get(`/workspaces/${workspaceId}/members/`);
  return res.data;
};
const getWorkspacetMemberApi = async (
  workspaceId: string,
  memberId: string
) => {
  const res = await Axios.get(
    `/workspaces/${workspaceId}/members/${memberId}/`
  );
  return res.data;
};
const createWorkspacetMemberApi = async (
  workspaceId: string,
  body: {
    user: string;
    is_super_access: boolean;
  }
) => {
  const res = await Axios.post(`/workspaces/${workspaceId}/members/`, body);
  return res.data;
};
const updateWorkspacetMemberApi = async (
  workspaceId: string,
  memberId: string,
  body: workspaceMembers
) => {
  const res = await Axios.patch(
    `/workspaces/${workspaceId}/members/${memberId}`,
    body
  );
  return res.data;
};
const deleteWorkspacetMemberApi = async (
  workspaceId: string,
  memberId: string
) => {
  const res = await Axios.delete(
    `/workspaces/${workspaceId}/members/${memberId}/`
  );
  return res.data;
};
export {
  getAllWorkspacetMembersApi,
  getWorkspacetMemberApi,
  createWorkspacetMemberApi,
  updateWorkspacetMemberApi,
  deleteWorkspacetMemberApi,
};

import Axios from "@/utils/axios";

const getAllProjectMembersApi = async (
  projectId: string,
  workspaceId: string
) => {
  const res = await Axios.get(
    `/workspaces/${workspaceId}/projects/${projectId}/members/`
  );
  return res.data;
};
const getProjectMemberApi = async (
  projectId: string,
  workspaceId: string,
  memberId: string
) => {
  const res = await Axios.get(
    `/workspaces/${workspaceId}/projects/${projectId}/members/${memberId}`
  );
  return res.data;
};
const createProjectMemberApi = async (
  projectId: string,
  workspaceId: string,
  body: {
    user: string;
  }
) => {
  const res = await Axios.post(
    `/workspaces/${workspaceId}/projects/${projectId}/members/`,
    body
  );
  return res.data;
};
const updateProjectMemberApi = async (
  projectId: string,
  workspaceId: string,
  memberId: string,
  body: userTaskBody
) => {
  const res = await Axios.patch(
    `/workspaces/${workspaceId}/projects/${projectId}/members/${memberId}`,
    body
  );
  return res.data;
};
const deleteProjectMemberApi = async (
  projectId: string,
  workspaceId: string,
  memberId: string
) => {
  const res = await Axios.delete(
    `/workspaces/${workspaceId}/projects/${projectId}/members/${memberId}`
  );
  return res.data;
};
export {
  getAllProjectMembersApi,
  getProjectMemberApi,
  createProjectMemberApi,
  updateProjectMemberApi,
  deleteProjectMemberApi,
};

import Axios from "@/utils/axios";

const getAllProjectMembersApi = async (
  projectId: projectIdType,
  workspaceId: workspaceIdType
) => {
  const res = await Axios.get(
    `/workspaces/${workspaceId}/projects/${projectId}/members/`
  );
  return res.data;
};
const getProjectMemberApi = async (
  projectId: projectIdType,
  workspaceId: workspaceIdType,
  memberId: string
) => {
  const res = await Axios.get(
    `/workspaces/${workspaceId}/projects/${projectId}/members/${memberId}/`
  );
  return res.data;
};
const createProjectMemberApi = async (
  projectId: projectIdType,
  workspaceId: workspaceIdType,
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
  projectId: projectIdType,
  workspaceId: workspaceIdType,
  memberId: string,
  body: userTaskBody
) => {
  const res = await Axios.patch(
    `/workspaces/${workspaceId}/projects/${projectId}/members/${memberId}/`,
    body
  );
  return res.data;
};
const deleteProjectMemberApi = async (
  projectId: projectIdType,
  workspaceId: workspaceIdType,
  memberId: string
) => {
  const res = await Axios.delete(
    `/workspaces/${workspaceId}/projects/${projectId}/members/${memberId}/`
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

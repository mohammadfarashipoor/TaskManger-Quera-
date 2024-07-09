import Axios from "@/utils/axios";

const getProjectByIdApi = async (
  projectId: projectIdType,
  workspaceId: workspaceIdType
) => {
  const res = await Axios.get(
    `/workspaces/${workspaceId}/projects/${projectId}/`
  );
  return res.data;
};
const getAllProjectsByIdApi = async (workspaceId: workspaceIdType) => {
  const res = await Axios.get(`/workspaces/${workspaceId}/projects/`);
  return res.data;
};
const createProjectApi = async (
  workspaceId: workspaceIdType,
  body: { name: string }
) => {
  const res = await Axios.post(`/workspaces/${workspaceId}/projects/`, body);
  return res.data;
};
const deleteProjectApi = async (
  projectId: projectIdType,
  workspaceId: workspaceIdType
) => {
  const res = await Axios.delete(
    `/workspaces/${workspaceId}/projects/${projectId}/`
  );
  return res.data;
};
const updateProjectApi = async (
  projectId: projectIdType,
  workspaceId: workspaceIdType,
  body: { name: string }
) => {
  const res = await Axios.put(
    `/workspaces/${workspaceId}/projects/${projectId}/`,
    body
  );
  return res.data;
};

export {
  getProjectByIdApi,
  createProjectApi,
  getAllProjectsByIdApi,
  deleteProjectApi,
  updateProjectApi,
};

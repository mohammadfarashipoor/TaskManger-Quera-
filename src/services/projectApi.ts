import Axios from "@/utils/axios";

const getProjectByIdApi = async (projectId: string, workspaceId: string) => {
  const res = await Axios.get(
    `/workspaces/${workspaceId}/projects/${projectId}`
  );
  return res.data;
};
const getAllProjectsByIdApi = async (workspaceId: string) => {
  const res = await Axios.get(`/workspaces/${workspaceId}/projects/`);
  return res.data;
};
const createProjectApi = async (
  workspaceId: string,
  body: { name: string }
) => {
  const res = await Axios.post(`/workspaces/${workspaceId}/projects/`, body);
  return res.data;
};
const deleteProjectApi = async (projectId: string, workspaceId: string) => {
  const res = await Axios.delete(
    `/workspaces/${workspaceId}/projects/${projectId}`
  );
  return res.data;
};
const updateProjectApi = async (
  projectId: string,
  workspaceId: string,
  body: { name: string }
) => {
  const res = await Axios.put(
    `/workspaces/${workspaceId}/projects/${projectId}`,
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

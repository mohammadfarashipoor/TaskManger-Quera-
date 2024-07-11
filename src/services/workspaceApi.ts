import Axios from "@/utils/axios";

const getAllWorkspacesApi = async () => {
  const res = await Axios.get(`/workspaces/`);
  return res.data;
};

const getWorkspacesByIdApi = async (workspaceId: workspaceIdType) => {
  const res = await Axios.get(`/workspaces/${workspaceId}/`);
  return res.data;
};

const createWorkSpaceApi = async (body: { name: string; color: string }) => {
  const res = await Axios.post(`/workspaces/`, body);
  return res.data;
};

const updateWorkspaceApi = async (
  id: string,
  body: {
    name?: string;
    color?: string;
  }
) => {
  const res = await Axios.patch(`/workspaces/${id}/`, body);
  return res.data;
};

const addMemberToWorkspaceApi = async (
  username: string,
  workspaceId: workspaceIdType
) => {
  const res = await Axios.put(`/workspaces/${workspaceId}/members/${username}/`);
  return res.data;
};

const deleteWorkspaceApi = async (workspaceId: workspaceIdType) => {
  const res = await Axios.delete(`/workspaces/${workspaceId}/`);
  return res.data;
};

export {
  getAllWorkspacesApi,
  createWorkSpaceApi,
  updateWorkspaceApi,
  getWorkspacesByIdApi,
  addMemberToWorkspaceApi,
  deleteWorkspaceApi,
};

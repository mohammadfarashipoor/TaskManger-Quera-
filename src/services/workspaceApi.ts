import Axios from "@/utils/axios";

const getAllWorkspacesApi = async () => {
  const res = await Axios.get(`/workspace/`);
  return res.data;
};

const getWorkspacesByIdApi = async (workspaceId: workspaceIdType) => {
  const res = await Axios.get(`/workspace/${workspaceId}`);
  return res.data;
};

const createWorkSpaceApi = async (body: { name: string; color: string }) => {
  const res = await Axios.post(`/workspace/`, body);
  return res.data;
};

const updateWorkspaceApi = async (
  id: string,
  body: {
    name?: string;
    color?: string;
  }
) => {
  const res = await Axios.patch(`/workspace/${id}/`, body);
  return res.data;
};

const addMemberToWorkspaceApi = async (
  username: string,
  workspaceId: workspaceIdType
) => {
  const res = await Axios.put(`/workspace/${workspaceId}/members/${username}/`);
  return res.data;
};

const deleteWorkspaceApi = async (workspaceId: workspaceIdType) => {
  const res = await Axios.delete(`/workspace/${workspaceId}/`);
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

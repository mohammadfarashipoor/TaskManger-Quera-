import Axios from "@/utils/axios";

const getAllWorkspacesApi = async () => {
  const res = await Axios.get(`/workspace/`);
  return res.data;
};

const getWorkspacesByIdApi = async (wsId: string) => {
  const res = await Axios.get(`/workspace/${wsId}`);
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

const addMemberToWorkspaceApi = async (username: string, wsId: string) => {
  const res = await Axios.put(`/workspace/${wsId}/members/${username}/`);
  return res.data;
};

const deleteWorkspaceApi = async (wsId: string) => {
  const res = await Axios.delete(`/workspace/${wsId}/`);
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

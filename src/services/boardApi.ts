import Axios from "@/utils/axios";

const getAllBoardsApi = async (projectId: string, workspaceId: string) => {
  const res = await Axios.get(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/`
  );
  return res.data;
};
const createBoardApi = async (
  projectId: string,
  workspaceId: string,
  body: {
    name: string;
    order: number;
    is_archive: boolean;
    color: string;
  }
) => {
  const res = await Axios.post(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/`,
    body
  );
  return res.data;
};
const getBoardApi = async (
  id: string,
  projectId: string,
  workspaceId: string
) => {
  const res = await Axios.get(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${id}/`
  );
  return res.data;
};
const changeBoardApi = async (
  id: string,
  projectId: string,
  workspaceId: string,
  body: {
    name: string;
    order: number;
    is_archive: boolean;
    color: string;
  }
) => {
  const res = await Axios.patch(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${id}/`,
    body
  );
  return res.data;
};

const deleteBoardApi = async (
  id: string,
  projectId: string,
  workspaceId: string
) => {
  const res = await Axios.delete(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${id}/`
  );
  return res.data;
};
export {
  getAllBoardsApi,
  getBoardApi,
  deleteBoardApi,
  changeBoardApi,
  createBoardApi,
};

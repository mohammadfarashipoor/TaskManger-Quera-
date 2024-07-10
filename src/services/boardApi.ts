import Axios from "@/utils/axios";

const getAllBoardsApi = async (
  projectId: projectIdType,
  workspaceId: workspaceIdType
) => {
  const res = await Axios.get(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/`
  );
  return res.data;
};
const createBoardApi = async (
  projectId: projectIdType,
  workspaceId: workspaceIdType,
  body: boardBody
) => {
  const res = await Axios.post(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/`,
    body
  );
  return res.data;
};
const getBoardApi = async (
  id: string,
  projectId: projectIdType,
  workspaceId: workspaceIdType
) => {
  const res = await Axios.get(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${id}/`
  );
  return res.data;
};
const changeBoardApi = async (
  id: string,
  projectId: projectIdType,
  workspaceId: workspaceIdType,
  body: boardBody
) => {
  const res = await Axios.patch(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${id}/`,
    body
  );
  return res.data;
};

const deleteBoardApi = async (
  id: string,
  projectId: projectIdType,
  workspaceId: workspaceIdType
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

import Axios from "@/utils/axios";

const getAllCommentsApi = async (
  projectId: string,
  workspaceId: string,
  boardId: string,
  taskId: string
) => {
  const res = await Axios.get(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks/${taskId}/comments`
  );
  return res.data;
};
const createCommentApi = async (
  projectId: string,
  workspaceId: string,
  boardId: string,
  taskId: string,
  body: createCommentBody
) => {
  const res = await Axios.post(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks/${taskId}/comments`,
    body
  );
  return res.data;
};
const getCommentApi = async (
  projectId: string,
  workspaceId: string,
  boardId: string,
  taskId: string,
  CommentId: string
) => {
  const res = await Axios.get(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks/${taskId}/comments/${CommentId}`
  );
  return res.data;
};
const updadteCommentApi = async (
  projectId: string,
  workspaceId: string,
  boardId: string,
  taskId: string,
  CommentId: string,
  body: createCommentBody
) => {
  const res = await Axios.patch(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks/${taskId}/comments/${CommentId}`,
    body
  );
  return res.data;
};

const deleteCommentApi = async (
  projectId: string,
  workspaceId: string,
  boardId: string,
  taskId: string,
  CommentId: string
) => {
  const res = await Axios.delete(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks/${taskId}/comments/${CommentId}`
  );
  return res.data;
};

export {
  createCommentApi,
  getCommentApi,
  deleteCommentApi,
  updadteCommentApi,
  getAllCommentsApi,
};

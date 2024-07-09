import Axios from "@/utils/axios";

const changeTaskApi = async (
  projectId: projectIdType,
  workspaceId: workspaceIdType,
  boardId: string,
  taskId: string,
  body: createTaskBody
) => {
  return Axios.put(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks/${taskId}/`,
    body
  );
};
const createTaskApi = async (
  projectId: projectIdType,
  workspaceId: workspaceIdType,
  boardId: string,
  body: createTaskBody
) => {
  return Axios.post(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks/`,
    body
  );
};
const deleteTaskApi = async (
  projectId: projectIdType,
  workspaceId: workspaceIdType,
  boardId: string,
  taskId: string
) => {
  return Axios.delete(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/task/${taskId}/`
  );
};
const getAllTaskApi = async (
  projectId: projectIdType,
  workspaceId: workspaceIdType,
  boardId: string
) => {
  return Axios.get(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks`
  );
};
const getTaskApi = async (
  projectId: projectIdType,
  workspaceId: workspaceIdType,
  boardId: string,
  taskId: string
) => {
  return Axios.get(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks/${taskId}/`
  );
};
const getAllAssignTaskApi = async (
  projectId: projectIdType,
  workspaceId: workspaceIdType,
  boardId: string,
  taskId: string
) => {
  return Axios.get(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks/${taskId}/assignee/`
  );
};
const getAssignTaskApi = async (
  projectId: projectIdType,
  workspaceId: workspaceIdType,
  boardId: string,
  taskId: string,
  assigneeId: string
) => {
  return Axios.get(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks/${taskId}/assignee/${assigneeId}/`
  );
};
const unassignTaskApi = async (
  projectId: projectIdType,
  workspaceId: workspaceIdType,
  boardId: string,
  taskId: string,
  body: {
    user: string;
  }
) => {
  return Axios.post(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks/${taskId}/assignee/`,
    body
  );
};
const assignTaskApi = async (
  projectId: projectIdType,
  workspaceId: workspaceIdType,
  boardId: string,
  taskId: string,
  assigneeId: string,
  body: userTaskBody
) => {
  return Axios.put(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks/${taskId}/assignee/${assigneeId}/`,
    body
  );
};
const deleteAssignTaskApi = async (
  projectId: projectIdType,
  workspaceId: workspaceIdType,
  boardId: string,
  taskId: string,
  assigneeId: string
) => {
  return Axios.delete(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks/${taskId}/assignee/${assigneeId}/`
  );
};

const getAllTasksLogApi = async (
  projectId: projectIdType,
  workspaceId: workspaceIdType,
  boardId: string,
  taskId: string
) => {
  const res = await Axios.get(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks/${taskId}/logs/`
  );
  return res.data;
};
const getTaskLogApi = async (
  projectId: projectIdType,
  workspaceId: workspaceIdType,
  boardId: string,
  taskId: string,
  taskLogId: string
) => {
  const res = await Axios.get(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks/${taskId}/logs/${taskLogId}/`
  );
  return res.data;
};
export {
  changeTaskApi,
  getAllTaskApi,
  createTaskApi,
  deleteTaskApi,
  assignTaskApi,
  unassignTaskApi,
  getTaskApi,
  deleteAssignTaskApi,
  getAssignTaskApi,
  getAllAssignTaskApi,
  getTaskLogApi,
  getAllTasksLogApi,
};

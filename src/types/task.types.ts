type taskAssignsType = {
  _id: string;
  username: string;
  email: string;
};
interface Task {
  _id: string;
  name: string;
  description: string;
  label: [];
  board: string;
  taskAssigns: taskAssignsType[];
  comments: commentType[];
  position: number;
  deadline: string;
}
type BoardType = {
  _id: "";
  name: "";
  position: number;
  project: "";
  tasks: Task[];
};
type ProjectType = {
  projectId: projectIdType;
  projectBoards: BoardType[];
};

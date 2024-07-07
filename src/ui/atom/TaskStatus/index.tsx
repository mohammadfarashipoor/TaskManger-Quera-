import SvgIcon from "../SvgIcon";
import { statusColor } from "./statusColor";
type StatusType = "Open" | "InProgress" | "Pending" | "ToDO" | "Done";
interface TaskStatusProps {
  name: StatusType;
  tasksCount: string;
}

const TaskStatus: React.FC<TaskStatusProps> = (props) => {
  const { name, tasksCount } = props;
  return (
    <div
      className={`flex justify-between p-2 rounded-2xl w-[250px] border-t-2 shadow-lg ${statusColor[name].borderColor}`}
    >
      <div className="flex items-center gap-2">
        <h2>{statusColor[name].name}</h2>
        <p className="text-xs p-1 rounded-lg">{tasksCount}</p>
      </div>
      <div className="flex items-center gap-3">
        <SvgIcon name="plus" />
        <SvgIcon name="three-dots" />
      </div>
    </div>
  );
};

export default TaskStatus;

import TaskStatus from "@/ui/atom/TaskStatus";
import TaskCard from "../TaskCard";
import { Button } from "@/ui/atom/Button";
interface TaskColumnProps {
  status: StatusType;
  tasks: Task[];
}
const TaskColumn: React.FC<TaskColumnProps> = (props) => {
  const { status, tasks } = props;

  return (
    <div className="flex flex-col gap-2">
      <TaskStatus name={status} tasksCount={tasks.length.toString()} />
      {tasks.map((task) => (
        <TaskCard
          title={task.name}
          details={task.details}
          persianDate={task.persianDate}
        />
      ))}
      {status === "Open" && (
        <Button
          className="whitespace-nowrap"
          type="button"
          iconName="add"
          isOnlyBorderButton
        >
          ساخت تسک جدید
        </Button>
      )}
    </div>
  );
};

export default TaskColumn;

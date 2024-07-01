import Dropdown from "@/ui/atom/Dropdown";
import TaskHeader from "./TaskHeader";
import TaskItem from "./TaskItem";
interface TaskListProps {
  status: StatusType;
  className?: string;
}

const TaskList: React.FC<TaskListProps> = (props) => {
  const { status, className = "" } = props;
  return (
    <Dropdown
      className={className}
      Header={<TaskHeader status={status} countTask={2} />}
    >
      <TaskItem title="سلام" color="#208D8E" deadline="6 آبان" />
    </Dropdown>
  );
};
export default TaskList;

import { statusColor } from "@/ui/atom/TaskStatus/statusColor";

interface TaskHeaderProps {
  status: StatusType;
  countTask: number;
}
const TaskHeader: React.FC<TaskHeaderProps> = ({ status, countTask }) => (
  <div className="flex items-center justify-between w-full ">
    <div className="flex items-center basis-1/2 gap-3">
      <span className={`rounded-xl p-2 text-white ${statusColor[status].bg}`}>
        {statusColor[status].name}
      </span>
      <span className="">{countTask} تسک</span>
    </div>
    <div className="flex justify-between items-center basis-1/2">
      <span className="basis-1/4 flex justify-center">اعضا</span>
      <span className="basis-1/4 flex justify-center">ددلاین</span>
      <span className="basis-1/4 flex justify-center">اولویت</span>
      <span className="basis-1/4 flex justify-center">توضیحات</span>
    </div>
  </div>
);
export default TaskHeader;

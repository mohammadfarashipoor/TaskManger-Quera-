import Avatar from "@/ui/atom/Avatar";

import ColorBox from "@/ui/atom/ColorBox";
import SvgIcon from "@/ui/atom/SvgIcon";
interface TaskItemProps {
  title: string;
  deadline: string;
  color: PaletteColorType;
}
const TaskItem: React.FC<TaskItemProps> = (props) => {
  const { title, deadline, color } = props;
  return (
    <div className="flex p-4 mr-[40px]">
      <div className="flex basis-1/2 gap-3">
        <ColorBox color={color} />
        <span className="">{title}</span>
      </div>
      <div className="flex justify-between basis-1/2">
        <div className="flex basis-1/4 justify-center">
          <Avatar className="z-10" />
          <Avatar className="-mr-[25px]" />
        </div>
        <span className="basis-1/4 flex justify-center">{deadline}</span>
        <div className="basis-1/4 flex justify-center">
          <SvgIcon name="flag" className="" />
        </div>
        <div className="basis-1/4 flex justify-center">
          <SvgIcon name="text-right" />
        </div>
      </div>
    </div>
  );
};
export default TaskItem;

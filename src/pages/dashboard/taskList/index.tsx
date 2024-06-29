import Dropdown from "@/ui/atom/Dropdown";
import Text from "@/ui/atom/typography/Text";
import TaskList from "@/ui/organism/TaskList";

function TaskListViewPage() {
  return (
    <Dropdown Header={<Text textSize="boldXL">پروژه اول</Text>}>
      <TaskList status="Pending" className="mr-[25px] mt-5" />
      <TaskList status="Open" className="mr-[25px] mt-5" />
      <TaskList status="InProgress" className="mr-[25px] mt-5" />
      <TaskList status="ToDO" className="mr-[25px] mt-5" />
      <TaskList status="Done" className="mr-[25px] mt-5" />
    </Dropdown>
  );
}
export default TaskListViewPage;

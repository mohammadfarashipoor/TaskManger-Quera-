import { Button } from "@/ui/atom/Button";
import Dropdown from "@/ui/atom/Dropdown";
import Text from "@/ui/atom/typography/Text";
import TaskList from "@/ui/organism/TaskList";

function TaskListViewPage() {
  return (
    <div className="overflow-y-scroll relative h-[90vh] p-6">
      <Dropdown Header={<Text textSize="boldXL">پروژه اول</Text>}>
        <TaskList status="Pending" className="mr-[25px] mt-5" />
        <TaskList status="Open" className="mr-[25px] mt-5" />
        <TaskList status="InProgress" className="mr-[25px] mt-5" />
        <TaskList status="ToDO" className="mr-[25px] mt-5" />
        <TaskList status="Done" className="mr-[25px] mt-5" />
      </Dropdown>
      <Dropdown Header={<Text textSize="boldXL">پروژه اول</Text>}>
        <TaskList status="Pending" className="mr-[25px] mt-5" />
        <TaskList status="Open" className="mr-[25px] mt-5" />
        <TaskList status="InProgress" className="mr-[25px] mt-5" />
        <TaskList status="ToDO" className="mr-[25px] mt-5" />
        <TaskList status="Done" className="mr-[25px] mt-5" />
      </Dropdown>
      <Button iconName="add" className="fixed bottom-5 left-5 w-32">
        تسک جدید
      </Button>
    </div>
  );
}
export default TaskListViewPage;

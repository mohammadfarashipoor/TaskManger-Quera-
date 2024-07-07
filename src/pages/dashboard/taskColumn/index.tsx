import TaskColumn from "@/ui/organism/TaskColumn";

function TaskColumnViewPage() {
  const tasks = [
    { name: "سلام", details: "چططططططططططوری", persianDate: "آبان 6" },
    { name: "سلام", details: "چططططططططططوری", persianDate: "آبان 6" },
    { name: "سلام", details: "چططططططططططوری", persianDate: "آبان 6" },
    { name: "سلام", details: "چططططططططططوری", persianDate: "آبان 6" },
    { name: "سلام", details: "چططططططططططوری", persianDate: "آبان 6" },
    { name: "سلام", details: "چططططططططططوری", persianDate: "آبان 6" },
  ];
  return (
    <div className="overflow-scroll w-full h-[84%] flex gap-3">
      <TaskColumn status="Open" tasks={tasks} />
      <TaskColumn status="InProgress" tasks={tasks} />
      <TaskColumn status="Pending" tasks={tasks} />
      <TaskColumn status="ToDO" tasks={tasks} />
      <TaskColumn status="Done" tasks={tasks} />
      <TaskColumn status="Done" tasks={tasks} />
    </div>
  );
}

export default TaskColumnViewPage;

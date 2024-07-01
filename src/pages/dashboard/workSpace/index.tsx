import { Card } from "@/ui/atom/Card";
import { TitleCard } from "@/ui/atom/TitleCard";

function WorkSpacePage() {
  return <div>
    <TitleCard>
      درس مدیریت پروژه
    </TitleCard>
    <Card className="bg-gradient-to-br from-green-300 via-green-500 to-white-200">پروژه اول</Card>
  </div>;
}

export default WorkSpacePage;

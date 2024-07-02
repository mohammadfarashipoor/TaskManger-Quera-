import { Button } from "@/ui/atom/Button";
import { Card } from "@/ui/atom/Card";
import { TitleCard } from "@/ui/atom/TitleCard";
import { FC } from "react";

interface WorkSpaceMainProps {
  className?: string;
}

export const WorkSpaceMain: FC<WorkSpaceMainProps> = ({
  className=""
}) => {
  return (
    <>
    <div>
      <TitleCard className="mb-8">درس مدیریت پروژه</TitleCard>
      <div className="flex items-center">
        <Card className="bg-gradient-to-b from-green-300 via-green-500 to-white-200 ml-5">
          پروژه اول
        </Card>
        <Card className="bg-gradient-to-b from-green-300 via-green-500 to-white-200 ml-5">
        پروژه دوم
        </Card>
        <Card className="bg-gradient-to-b from-green-300 via-green-500 to-white-200 ml-5">
          پروژه سوم
        </Card>
      </div>
    </div>
    <hr className="my-10"/>
    <div>
    <TitleCard className="mb-8">کارهای شخصی</TitleCard>
      <div className="flex items-center">
        <Card className="bg-gradient-to-b from-orange-200 via-orange-500 to-white-200 ml-5">
          پروژه اول
        </Card>
        <Card className="bg-gradient-to-b from-orange-300 via-orange-500 to-white-200 ml-5">
        پروژه دوم
        </Card>
        <Card className="bg-gradient-to-b from-orange-300 via-orange-500 to-white-200 ml-5">
          پروژه سوم
        </Card>
      </div>
    </div>
    <hr className="my-10"/>
    <div className="flex">
        <Button type="button" isOnlyBorderButton={true} iconName="add">ساختن پروژه جدید</Button>
    </div>
    <hr className="my-10"/>
    <div>
    <TitleCard className="mb-8">درس طراحی الگوریتم</TitleCard>
      <div className="flex items-center">
        <Card className="bg-gradient-to-b from-blue-300 via-blue-500 to-white-200 ml-5">
          پروژه اول
        </Card>
        <Card className="bg-gradient-to-b from-blue-300 via-blue-500 to-white-200 ml-5">
        پروژه دوم
        </Card>
        <Card className="bg-gradient-to-b from-blue-300 via-blue-500 to-white-200 ml-5">
          پروژه سوم
        </Card>
      </div>
    </div>
    </>
  );
};

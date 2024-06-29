import { Outlet } from "react-router-dom";
import Text from "@/ui/atom/typography/Text";
import { FC, useState } from "react";
import { Button } from "@/ui/atom/Button";

const DashboardLayout: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleWorkSpaceClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="flex flex-row">
      <div
        className="w-[340px] bg-white border-l border-gray-200 p-4 p-10
     text-black fixed h-full pr-10"
      >
        <Text textColor="gradient" textSize="headingL">
          کوئرا تسک منیجر
        </Text>
        <Button
          type="button"
          iconName="add"
          isGrayButton
          className="mt-8"
          onClicK={handleWorkSpaceClick}
        >
          ساختن ورک‌اسپیس جدید
        </Button>

        <div className="flex flex-col "></div>
      </div>
      <div className="flex-1 mr-[340px]">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;

import { Outlet, useNavigate } from "react-router-dom";
import Text from "@/ui/atom/typography/Text";
import React, { FC, useState, MouseEvent } from "react";
import { Button } from "@/ui/atom/Button";
import { NewWorkSpace } from "@/ui/molocol/Box";
import ColorBox from "@/ui/atom/ColorBox";
import SvgIcon from "@/ui/atom/SvgIcon";
import Avatar from "@/ui/atom/Avatar";

const DashboardLayout: FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedWorkspace, setSelectedWorkspace] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const workspaces = [
    { name: "درس مدیریت پروژه", color: "#40C057" },
    { name: "کارهای شخصی", color: "#FAB005" },
    { name: "درس کامپایلر", color: "#FA5252" },
    { name: "درس طراحی الگوریتم", color: "#228BE6" },
  ];

  const handleWorkSpaceClick = () => {
    setCurrentStep(1);
  };

  const handleCloseModal = () => {
    setCurrentStep(0);
  };

  const handleContinueClick = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleWorkspaceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "all") {
      setSelectedWorkspace("");
    } else {
      setSelectedWorkspace(value);
    }
  };

  const handleSearchClick = () => {
    const searchInput = document.getElementById(
      "search-input"
    ) as HTMLInputElement;
    if (searchInput) {
      setSearchQuery(searchInput.value);
    }
  };

  const handleExitClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    navigate("/login");
  };

  const renderDots = () => (
    <div className="flex justify-center mt-4">
      {[1, 2, 3].map((step) => (
        <div
          key={step}
          className={`w-2 h-2 rounded-full mx-1 ${
            currentStep === step ? "bg-blue-500" : "bg-gray-primary"
          }`}
        ></div>
      ))}
    </div>
  );

  // const filteredWorkspaces = selectedWorkspace
  //   ? workspaces.filter((workspace) => workspace.name === selectedWorkspace)
  //   : workspaces;
  const filteredWorkspaces = workspaces.filter(
    (workspace) =>
      workspace.name.includes(selectedWorkspace) &&
      workspace.name.includes(searchQuery)
  );

  return (
    <div className="flex flex-row">
      <div
        className="w-[340px] bg-white border-l border-gray-200 p-4 text-black fixed h-full flex 
        flex-col justify-between"
      >
        <div>
          <Text textColor="gradient" textSize="headingL">
            کوئرا تسک منیجر
          </Text>
          <select
            value={selectedWorkspace}
            onChange={handleWorkspaceChange}
            className="w-full mt-4 p-2  rounded font-extrabold"
          >
            <option value="all">ورک‌اسپیس‌ها</option>
            {workspaces.map((workspace, index) => (
              <option
                key={index}
                value={workspace.name}
                className="font-extrabold"
              >
                {workspace.name}
              </option>
            ))}
          </select>
          <div className="relative flex items-center w-full h-[40px] bg-white rounded">
            <SvgIcon
              name="search"
              className="absolute left-3 text-gray-500 cursor-pointer"
              onClick={handleSearchClick}
            />
            <input
              type="text"
              id="search-input"
              placeholder="جستجو کنید"
              className="pl-10 pr-3 w-full h-full bg-transparent border-none focus:outline-none"
            />
          </div>
          <Button
            type="button"
            iconName="add"
            className="mt-2 bg-gray-light"
            onclick={handleWorkSpaceClick}
          >
            ساختن ورک‌اسپیس جدید
          </Button>
          {currentStep > 0 && (
            <NewWorkSpace isOpen={currentStep === 1} toggle={handleCloseModal}>
              <div className="w-full px-4">
                <label htmlFor="workspace" className="block text-right mt-4">
                  نام ورک‌اسپیس
                </label>
                <input
                  type="text"
                  id="workspace"
                  name="workspace"
                  className="block w-full mt-2 p-2 border border-gray-primary rounded"
                />
                <Button
                  type="button"
                  isBold
                  className="w-full mt-8"
                  onclick={handleContinueClick}
                >
                  ادامه
                </Button>
                {renderDots()}
              </div>
            </NewWorkSpace>
          )}
          {currentStep > 1 && (
            <NewWorkSpace isOpen={currentStep === 2} toggle={handleCloseModal}>
              <div className="w-full px-4">
                <label htmlFor="workspace" className="block text-right mt-4">
                  انتخاب رنگ ورک‌اسپیس
                </label>
                <input
                  type="text"
                  id="workspace"
                  name="workspace"
                  className="block w-full mt-2 p-2 border border-gray-primary rounded"
                />
                <Button
                  type="button"
                  isBold
                  className="w-full mt-8"
                  onclick={handleContinueClick}
                >
                  ادامه
                </Button>
                {renderDots()}
              </div>
            </NewWorkSpace>
          )}
          {currentStep > 2 && (
            <NewWorkSpace isOpen={currentStep === 3} toggle={handleCloseModal}>
              <div className="w-full px-4">
                <label htmlFor="workspace" className="block text-right mt-4">
                  dfdfdfdrg
                </label>
                <input
                  type="text"
                  id="workspace"
                  name="workspace"
                  className="block w-full mt-2 p-2 border border-gray-primary rounded"
                />
                <Button
                  type="button"
                  isBold
                  className="w-full mt-8"
                  onclick={handleContinueClick}
                >
                  ادامه
                </Button>
                {renderDots()}
              </div>
            </NewWorkSpace>
          )}

          <div className="flex flex-col mt-4 gap-2">
            {filteredWorkspaces.map((workspace, index) => (
              <div key={index} className="flex flex-row gap-2 cursor-pointer">
                <ColorBox color={workspace.color} />
                <Text textSize="bodyM">{workspace.name}</Text>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mt-auto flex flex-row items-center gap-2">
            <Avatar
              backgroundColor="bg-indigo-secondary"
              textColor="text-indigo-primary"
              name="Nilofar Mojodi"
              className="w-[36px] h-[33px]"
            />
            <Text textSize="bodyM">نیلوفر موجودی</Text>
          </div>
          <div
            className="flex flex-row items-center gap-1 mt-4 mr-2 cursor-pointer"
            onClick={handleExitClick}
          >
            <SvgIcon name="logout" />
            <Text textSize="bodyM" textColor="gray">
              خروج
            </Text>
          </div>
        </div>
      </div>
      <div className="flex-1 mr-[340px]">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;

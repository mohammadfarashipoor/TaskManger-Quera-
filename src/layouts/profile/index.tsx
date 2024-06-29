import { MouseEvent } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import Text from "@/ui/atom/typography/Text";
import SvgIcon from "@/ui/atom/SvgIcon";
import { FC, useState } from "react";

const ProfileLayout: FC = () => {
  const navigate = useNavigate();

  const handleBackClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigate(-1);
  };

  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
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

        {/* <Button
          iconName="arrow-side"
          type="button"
          className="w-[113px] h-[36px] mt-16"
        >
          بازگشت
        </Button> */}
        <Link
          to="#"
          className="flex items-center justify-center w-[113px] h-[36px] mt-16 bg-brand-primary text-white rounded-lg"
          onClick={handleBackClick}
        >
          <SvgIcon
            name="arrow-side"
            width="24"
            height="24"
            //  className="mr-2  transform scaleX(-1)"
            className="ml-2 transform  flip-horizontal"
          />
          بازگشت
          {/* <Text textSize="boldL" textColor="white">
            بازگشت
          </Text> */}
        </Link>
        <div className="mt-8">
          <div
            className={`flex flex-row cursor-pointer mb-6  ${
              activeLink === "personalinfo"
                ? "bg-brand-secondary rounded p-2"
                : ""
            }`}
          >
            <Link
              to="/personalinfo"
              className="flex items-center space-x-2"
              onClick={() => handleLinkClick("personalinfo")}
            >
              <div className="ml-2">
                <SvgIcon name="info-user" width="24" height="24" />
              </div>
              <Text
                textSize={activeLink === "personalinfo" ? "boldL" : "bodyL"}
              >
                اطلاعات فردی
              </Text>
            </Link>
          </div>
          <div
            className={`flex flex-row cursor-pointer mb-6 ${
              activeLink === "accountinfo"
                ? "bg-brand-secondary rounded p-2"
                : ""
            }`}
          >
            <Link
              to="/accountinfo"
              className="flex items-center space-x-2"
              onClick={() => handleLinkClick("accountinfo")}
            >
              <div className="ml-2">
                <SvgIcon name="info-account" width="24" height="24" />
              </div>
              <Text textSize={activeLink === "accountinfo" ? "boldL" : "bodyL"}>
                اطلاعات حساب
              </Text>
            </Link>
          </div>
          <div
            className={`flex flex-row cursor-pointer ${
              activeLink === "settings" ? "bg-brand-secondary rounded p-2" : ""
            }`}
          >
            <Link
              to="/settings"
              className="flex items-center space-x-2"
              onClick={() => handleLinkClick("settings")}
            >
              <div className="ml-2">
                <SvgIcon name="setting" width="24" height="24" />
              </div>
              <Text textSize={activeLink === "settings" ? "boldL" : "bodyL"}>
                تنظیمات
              </Text>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-1 mr-[340px]">
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileLayout;

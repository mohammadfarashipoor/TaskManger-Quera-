import { Link, Outlet } from "react-router-dom";
import Text from "@/ui/atom/typography/Text";
import { Button } from "@/ui/atom/Button";
import SvgIcon from "@/ui/atom/SvgIcon";
import { useState } from "react";

function ProfileLayout() {
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

        <Button
          isprimary
          iconName="arrow-side"
          type="button"
          className="w-[113px] h-[36px] mt-16"
        >
          بازگشت
        </Button>
        <div className="mt-8">
          <div
            className={`flex flex-row cursor-pointer mb-6 ${
              activeLink === "personalinfo" ? "bg-brand-secondary" : ""
            }`}
          >
            <Link
              to="/personalinfo"
              className="flex items-center space-x-2"
              onClick={() => handleLinkClick("personalinfo")}
            >
              <SvgIcon name="info-user" width="24" height="24" />
              <Text
                textSize={activeLink === "personalinfo" ? "boldL" : "bodyL"}
              >
                اطلاعات فردی
              </Text>
            </Link>
          </div>
          <div
            className={`flex flex-row cursor-pointer mb-6 ${
              activeLink === "accountinfo" ? "bg-brand-secondary" : ""
            }`}
          >
            <Link
              to="/accountinfo"
              className="flex items-center space-x-2"
              onClick={() => handleLinkClick("accountinfo")}
            >
              <SvgIcon name="info-account" width="24" height="24" />
              <Text textSize={activeLink === "accountinfo" ? "boldL" : "bodyL"}>
                اطلاعات حساب
              </Text>
            </Link>
          </div>
          <div
            className={`flex flex-row cursor-pointer ${
              activeLink === "settings" ? "bg-brand-secondary" : ""
            }`}
          >
            <Link
              to="/settings"
              className="flex items-center space-x-2"
              onClick={() => handleLinkClick("settings")}
            >
              <SvgIcon name="setting" width="24" height="24" />
              <Text textSize={activeLink === "settings" ? "boldL" : "bodyL"}>
                تنظیمات
              </Text>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default ProfileLayout;

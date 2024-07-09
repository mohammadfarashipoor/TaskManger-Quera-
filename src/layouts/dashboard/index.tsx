import Avatar from "@/ui/atom/Avatar";
import { Button } from "@/ui/atom/Button";
import InputSearch from "@/ui/atom/InputSearch";
import SvgIcon from "@/ui/atom/SvgIcon";
import WorkspaceItem from "@/ui/atom/WorkspaceItem";
import Text from "@/ui/atom/typography/Text";
import { Link, Outlet } from "react-router-dom";
import { getWorkspaces } from "@/containers/workspace/action";
import { useAppDispatch } from "@/lib/hook";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

function DashboardLayout() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getWorkspaces());
  }, [dispatch]);

  const workspacesData = useSelector((state: RootState) => state.workspace);
  console.log(workspacesData);

  return (
    <div className="flex">
      <div className="flex flex-col items-start justify-between p-[22px] border-l-2 w-[340px] h-[100vh]">
        <div className="flex flex-col gap-s w-full">
          <Text textSize="headingXS" textColor="gradient">
            کوئرا تسک منیجر
          </Text>
          <div className="flex items-center justify-between self-stretch">
            <span>ورک‌اسپیس‌ها</span>
            <SvgIcon name="arrow-bottom" />
          </div>
          <InputSearch
            name="search"
            placeholder="جست و جو کنید"
            onChange={() => console.log("")}
          />

          <Button
            className="whitespace-nowrap"
            type="button"
            iconName="add"
            isGrayButton
          >
            ساخت ورک‌اسپیس‌ جدید
          </Button>
          <WorkspaceItem workspace={{ name: "اولین ", projects: ["سلام"] }} />
        </div>
        <div className="pb-[40px] self-stretch">
          <Link
            to="/personalinfo"
            className="flex gap-3 items-center mb-6 cursor-pointer"
          >
            <Avatar />
            <span>{`محمد`}</span>
          </Link>
          <div className="flex items-center justify-between pl-[20px]">
            <span className="flex items-center gap-1 cursor-pointer">
              <SvgIcon name="logout" width="30" height="30" />
              <span className="text-gray-primary">خروج</span>
            </span>
            <span>
              <SvgIcon name="sun" width="30" height="30" />
            </span>
          </div>
        </div>
      </div>
      <div className="p-3 w-[80vw] h-[100vh]">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;

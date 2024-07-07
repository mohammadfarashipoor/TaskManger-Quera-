import InputSearch from "@/ui/atom/InputSearch";
import SvgIcon from "@/ui/atom/SvgIcon";
import Text from "@/ui/atom/typography/Text";
import { NavLink } from "react-router-dom";

function OptionsDashboard() {
  const status = "وضعیت";
  return (
    <>
      <div className="flex justify-between p-2">
        <div className="flex items-center gap-3">
          <Text className="" textSize="boldL">
            پروژه اول
          </Text>
          <NavLink
            to={"/view/list"}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 border-r-2 pr-3 border-gray-[#e3e3e3] text-blue-primary"
                : "flex items-center gap-2 border-r-2 pr-3 border-gray-[#e3e3e3]"
            }
          >
            <SvgIcon name="view-list" />
            <span>نمایش لیستی</span>
          </NavLink>
          <NavLink
            to={"/view/column"}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 border-r-2 pr-3 border-gray-[#e3e3e3] text-blue-primary"
                : "flex items-center gap-2 border-r-2 pr-3 border-gray-[#e3e3e3]"
            }
          >
            <SvgIcon name="view-column" />
            <span>نمایش ستونی</span>
          </NavLink>
          <NavLink
            to={"/view/calendar"}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 border-r-2 border-l-2 px-3 border-gray-[#e3e3e3] text-blue-primary"
                : "flex items-center gap-2 border-r-2 border-l-2 px-3 border-gray-[#e3e3e3]"
            }
          >
            <SvgIcon name="calendar" />
            <span>تقویم</span>
          </NavLink>
        </div>
        <div className="flex items-center gap-2 ">
          <SvgIcon name="share" />
          <span>اشتراک گذاری</span>
        </div>
      </div>
      <hr className="my-5" />

      <div className="flex justify-between">
        <div className="flex gap-2">
          <InputSearch
            name="search"
            classNames="mx-2"
            onChange={() => console.log("")}
            placeholder="جست و جو بین تسک ها"
          />
          <div className="flex items-center gap-2 border-r-2 pr-3 border-gray-[#e3e3e3]">
            <div className="flex items-center  gap-2">
              <SvgIcon name="filter" />
              <span className="whitespace-nowrap">فیتر ها</span>
            </div>
            <span className="rounded-md whitespace-nowrap bg-blue-secondary text-blue-primary p-2 gap-2">{`دسته بندی شده با : ${status}`}</span>
          </div>
        </div>
        <div className="flex items-center rounded-md border-2 border-blue-primary p-1  gap-2">
          <SvgIcon name="refresh" />
          <span>بازگردانی تسک های آرشیو شده</span>
        </div>
      </div>
      <hr className="my-5" />
    </>
  );
}

export default OptionsDashboard;

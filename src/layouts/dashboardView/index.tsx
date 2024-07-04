import OptionsDashboard from "@/ui/organism/OptionsDashboard";
import { Outlet } from "react-router-dom";

function DashboardViewLayout() {
  return (
    <>
      <OptionsDashboard />
      <Outlet />
    </>
  );
}

export default DashboardViewLayout;

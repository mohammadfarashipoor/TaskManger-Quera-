import OptionsDashboard from "@/ui/organism/OptionsDashboard";
import { Outlet } from "react-router-dom";

function DashboardViewLayout() {
  return (
    <div>
      <OptionsDashboard />
      <Outlet />
    </div>
  );
}

export default DashboardViewLayout;

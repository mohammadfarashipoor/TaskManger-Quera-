import { Routes, Route, useNavigate } from "react-router-dom";

import AuthLayout from "@/layouts/auth";
import ForgotPage from "@/pages/auth/forgot";
import ResetPage from "@/pages/auth/reset";
import RegisterPage from "@/pages/auth/register";
import LoginPage from "@/pages/auth/login";
import NotFoundPage from "@/pages/notFound";
import DashboardLayout from "@/layouts/dashboard";
import TaskListViewPage from "@/pages/dashboard/taskList";
import CalendarViewPage from "@/pages/dashboard/calendar";
import TaskColumnViewPage from "@/pages/dashboard/taskColumn";
import ProfileLayout from "@/layouts/profile";
import PersonalInfoPage from "@/pages/profile/personalInfo";
import AccountInfoPage from "@/pages/profile/accountInfo";
import ProfileSettingsPage from "@/pages/profile/profileSettings";
import WorkSpacePage from "@/pages/dashboard/workSpace";
import DashboardViewLayout from "@/layouts/dashboardView";
import PrivateWrapper from "@/routes/Private";
import { useEffect } from "react";
import routerHook from "./utils/navigation";
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    routerHook(navigate);
  }, []);

  return (
    <>
      <Routes>
        <Route element={<PrivateWrapper />}>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<WorkSpacePage />} />
            <Route element={<DashboardViewLayout />}>
              <Route path="/view/column" element={<TaskColumnViewPage />} />
              <Route path="/view/calendar" element={<CalendarViewPage />} />
              <Route path="/view/list" element={<TaskListViewPage />} />
            </Route>
          </Route>
          <Route element={<ProfileLayout />}>
            <Route path="/personalinfo" element={<PersonalInfoPage />} />
            <Route path="/accountinfo" element={<AccountInfoPage />} />
            <Route path="/settings" element={<ProfileSettingsPage />} />
          </Route>
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/reset" element={<ResetPage />} />
          <Route path="/forgot" element={<ForgotPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

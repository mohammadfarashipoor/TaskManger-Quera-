import { Routes, Route } from "react-router-dom";
import AuthLayout from "@/layouts/auth";
import ForgotPage from "@/pages/auth/forget";
import ResetPage from "@/pages/auth/reset";
import RegisterPage from "@/pages/auth/register";
import LoginPage from "@/pages/auth/login";
function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset" element={<ResetPage />} />
        <Route path="/forgot" element={<ForgotPage />} />
      </Route>
    </Routes>
  );
}

export default App;

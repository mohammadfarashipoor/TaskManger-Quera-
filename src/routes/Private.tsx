import { Navigate, Outlet } from "react-router-dom";

const PrivateWrapper = () => {
  //   const isAuthenticated = localStorage.getItem("authToken");
  const isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateWrapper;

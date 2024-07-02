import Axios from "@/utils/axios";

// Regiter user
const register = async (userData: any) => {
  const response = await Axios.post("/accounts/", userData);
  return response.data;
};

// Login user
const login = async (userData: any) => {
  const response = await Axios.post("/accounts/login/", userData);

  return response.data;
};

// Forgot password
const forgot = async (userEmail: any) => {
  const response = await Axios.post("/accounts/reset-password", userEmail);
  return response.data;
};
// Reset password
const reset = async (userPass: any) => {
  const response = await Axios.post(
    "/accounts/reset-password/set-password",
    userPass
  );
  return response.data;
};
const authService = {
  register,
  login,
  forgot,
  reset,
};

export default authService;

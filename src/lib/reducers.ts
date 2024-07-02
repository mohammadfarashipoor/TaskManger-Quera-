import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/containers/auth/action";
export const rootReducer = combineReducers({
  auth: authReducer,
});
export default rootReducer;

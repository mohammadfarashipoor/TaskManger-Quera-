import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/containers/auth/action";
import workspaceReducer from "@/containers/workspace/action";

export const rootReducer = combineReducers({
  auth: authReducer,
  workspace: workspaceReducer,
});
export default rootReducer;

import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/containers/auth/action";
import workspaceReducer from "@/containers/workspace/action";
import accountReducer from "@/containers/account/action"

export const rootReducer = combineReducers({
  auth: authReducer,
  workspace: workspaceReducer,
  account:accountReducer,
});
export default rootReducer;

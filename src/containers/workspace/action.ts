import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import authService from "../auth/service";

type initialStateType = {
  data: any;
  isLoading: boolean;
  isError: boolean;
  message: unknown;
};

const initialState: initialStateType = {
  data: {},
  isLoading: false,
  isError: false,
  message: "",
};

// Register user
export const register = createAsyncThunk(
  "Workspace/getWorkspaces",
  async (userData: any, thunkAPI) => {
    try {
      return await authService.register(userData);
    } catch (error) {}
  }
);

const workspaceSlice = createSlice({
  name: "Workspace",
  initialState,
  reducers: {},
});

export const {} = workspaceSlice.actions;
export default workspaceSlice.reducer;

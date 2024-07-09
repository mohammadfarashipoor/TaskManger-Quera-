import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import {
  createWorkSpaceApi,
  deleteWorkspaceApi,
  getAllWorkspacesApi,
  getWorkspacesByIdApi,
  updateWorkspaceApi,
} from "@/services/workspaceApi";
import { getAllWorkspacetMembersApi } from "@/services/workspaceMembersApi";

type initialStateType = {
  dataWorkspace: any;
  dataWorkspaceMember: any;
  isLoading: boolean;
  isError: boolean;
  message: unknown;
};

const initialState: initialStateType = {
  dataWorkspace: {},
  dataWorkspaceMember: {},
  isLoading: false,
  isError: false,
  message: "",
};

// getWorkspaces
export const getWorkspaces = createAsyncThunk(
  "Workspace/getWorkspaces",
  async (_, thunkAPI) => {
    try {
      return await getAllWorkspacesApi();
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const message = "مشکلی به وجود آمده";
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

//createWorkspace
export const createWorkspace = createAsyncThunk(
  "Workspace/createWorkspace",
  async (workspaceData: any, thunkAPI) => {
    try {
      return await createWorkSpaceApi(workspaceData);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const message =
          error?.response?.data?.name ||
          error?.response?.data?.color ||
          "مشکلی به وجود آمده";
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

//getWorkspace
export const getWorkspace = createAsyncThunk(
  "Workspace/getWorkspace",
  async (workspaceId: string, thunkAPI) => {
    try {
      return await getWorkspacesByIdApi(workspaceId);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const message = error?.response?.data?.detail || "مشکلی به وجود آمده";
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

//updateWorkSpace
export const updateWorkSpace = createAsyncThunk(
  "Workspace/updateWorkSpace",
  async (
    {
      workspaceId,
      workspaceData,
    }: {
      workspaceId: string;
      workspaceData: { name?: string; color?: string };
    },
    thunkAPI
  ) => {
    try {
      return await updateWorkspaceApi(workspaceId, workspaceData);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const message =
          error?.response?.data?.name ||
          error?.response?.data?.color ||
          error?.response?.data?.detail ||
          "مشکلی به وجود آمده";
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

//removeWorkspace
export const removeWorkspace = createAsyncThunk(
  "Workspace/removeWorkspace",
  async (workspaceId: string, thunkAPI) => {
    try {
      return await deleteWorkspaceApi(workspaceId);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const message = error?.response?.data?.detail || "مشکلی به وجود آمده";
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

//getWorkspaceMembers
export const getWorkspaceMembers = createAsyncThunk(
  "Workspace/getWorkspaceMembers",
  async (workspace_Id: string, thunkAPI) => {
    try {
      return await getAllWorkspacetMembersApi(workspace_Id);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const message = error?.response?.data?.detail || "مشکلی به وجود آمده";
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

const workspaceSlice = createSlice({
  name: "Workspace",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWorkspaces.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWorkspaces.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.dataWorkspace = action.payload;
      })
      .addCase(getWorkspaces.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createWorkspace.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createWorkspace.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.dataWorkspace = action.payload;
        state.message = "ورک اسپیس ایجاد شد";
      })
      .addCase(createWorkspace.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getWorkspace.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWorkspace.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.dataWorkspace = action.payload;
      })
      .addCase(getWorkspace.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateWorkSpace.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateWorkSpace.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.dataWorkspace = action.payload;
        state.message = "ورک اسپیس با موفقیت آپدیت شد";
      })
      .addCase(updateWorkSpace.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(removeWorkspace.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeWorkspace.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.dataWorkspace = action.payload;
        state.message = "حذف موفقیت آمیز بود";
      })
      .addCase(removeWorkspace.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getWorkspaceMembers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWorkspaceMembers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.dataWorkspaceMember = action.payload;
      })
      .addCase(getWorkspaceMembers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const {} = workspaceSlice.actions;
export default workspaceSlice.reducer;

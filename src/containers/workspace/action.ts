import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import {
  createWorkSpaceApi,
  deleteWorkspaceApi,
  getAllWorkspacesApi,
  getWorkspacesByIdApi,
  updateWorkspaceApi,
} from "@/services/workspaceApi";
import {
  createWorkspacetMemberApi,
  deleteWorkspacetMemberApi,
  getAllWorkspacetMembersApi,
  getWorkspacetMemberApi,
  updateWorkspacetMemberApi,
} from "@/services/workspaceMembersApi";

type initialStateType = {
  dataWorkspace: any;
  dataWorkspaceMember: any;
  isLoading: boolean;
  isError: boolean;
  message: unknown;
};

interface workspaceMembers extends userTaskBody {
  is_super_access: boolean;
}

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

//createWorkspaceMember
export const createWorkspaceMember = createAsyncThunk(
  "Workspace/createWorkspaceMember",
  async (
    {
      workspace_Id,
      memberData,
    }: {
      workspace_Id: string;
      memberData: { user: string; is_super_access: boolean };
    },
    thunkAPI
  ) => {
    try {
      return await createWorkspacetMemberApi(workspace_Id, memberData);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const message =
          error?.response?.data?.user ||
          error?.response?.data?.detail ||
          "مشکلی به وجود آمده";
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

//getWorkspaceMember
export const getWorkspaceMember = createAsyncThunk(
  "Workspace/getWorkspaceMember",
  async (
    { workspace_Id, memberId }: { workspace_Id: string; memberId: string },
    thunkAPI
  ) => {
    try {
      return await getWorkspacetMemberApi(workspace_Id, memberId);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const message = error?.response?.data?.detail || "مشکلی به وجود آمده";
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

//updateWorkspaceMember
export const updateWorkspaceMember = createAsyncThunk(
  "Workspace/updateWorkspaceMember",
  async (
    {
      workspace_Id,
      memberId,
      body,
    }: { workspace_Id: string; memberId: string; body: workspaceMembers },
    thunkAPI
  ) => {
    try {
      return await updateWorkspacetMemberApi(workspace_Id, memberId, body);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const message =
          error?.response?.data?.user?.username ||
          error?.response?.data?.user?.email ||
          error?.response?.data?.user?.thumbnail ||
          error?.response?.data?.detail ||
          "مشکلی به وجود آمده";
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

//removeWorkspaceMember
export const removeWorkspaceMember = createAsyncThunk(
  "Workspace/removeWorkspaceMember",
  async (
    { workspace_Id, memberId }: { workspace_Id: string; memberId: string },
    thunkAPI
  ) => {
    try {
      return await deleteWorkspacetMemberApi(workspace_Id, memberId);
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
      })
      .addCase(createWorkspaceMember.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createWorkspaceMember.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.dataWorkspaceMember = action.payload;
      })
      .addCase(createWorkspaceMember.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getWorkspaceMember.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWorkspaceMember.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.dataWorkspaceMember = action.payload;
      })
      .addCase(getWorkspaceMember.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateWorkspaceMember.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateWorkspaceMember.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.dataWorkspaceMember = action.payload;
      })
      .addCase(updateWorkspaceMember.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(removeWorkspaceMember.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeWorkspaceMember.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.dataWorkspaceMember = action.payload;
      })
      .addCase(removeWorkspaceMember.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.message = "حذف موفقیت آمیز بود";
      });
  },
});

export const {} = workspaceSlice.actions;
export default workspaceSlice.reducer;

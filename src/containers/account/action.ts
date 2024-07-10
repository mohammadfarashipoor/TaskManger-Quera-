import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import {
  deleteAccountApi,
  getAccountApi,
  getAllAccountsApi,
  updadteAccountApi,
} from "@/services/accountApi";

type initialStateType = {
  dataAllAccounts: any;
  dataAccount: any;
  isLoading: boolean;
  isError: boolean;
  message: unknown;
};

const initialState: initialStateType = {
  dataAllAccounts: {},
  dataAccount: {},
  isLoading: false,
  isError: false,
  message: "",
};

// get all user
export const getAllAccounts = createAsyncThunk(
  "account/allAccount",
  async ({}, thunkAPI) => {
    try {
      return await getAllAccountsApi();
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const message =
          error?.response?.data?.username ||
          error?.response?.data?.email ||
          "مشکلی به وجود آمده";
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

// get user
export const getAccount = createAsyncThunk(
  "account/info",
  async (userId: string, thunkAPI) => {
    try {
      return await getAccountApi(userId);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const message = error?.response?.data?.detail || "مشکلی به وجود آمده";
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

// update user
export const updateAccount = createAsyncThunk(
  "account/updateAccount",
  async (
    { userId, body }: { userId: string; body: userTaskBody },
    thunkAPI
  ) => {
    try {
      return await updadteAccountApi(userId, body);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const message = error?.response?.data?.detail || "مشکلی به وجود آمده";
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const deleteAccount = createAsyncThunk(
  "account/deleteAccount",
  async (userId: string, thunkAPI) => {
    try {
      return await deleteAccountApi(userId);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const message = error?.response?.data?.detail || "مشکلی به وجود آمده";

        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllAccounts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllAccounts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.dataAllAccounts = action.payload;
      })
      .addCase(getAllAccounts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(getAccount.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAccount.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.dataAccount = action.payload;
      })
      .addCase(getAccount.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateAccount.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAccount.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.dataAccount = action.payload;
      })
      .addCase(updateAccount.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteAccount.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAccount.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.message = "رمز عبور با موفقیت تغییر کرد";
      })
      .addCase(deleteAccount.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default accountSlice.reducer;

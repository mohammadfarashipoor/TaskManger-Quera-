import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import routerHook from "@/utils/navigation";
import {
  forgetPasswordApi,
  loginApi,
  registerApi,
  resetPasswordApi,
} from "@/services/authApi";

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
  "Auth/register",
  async (userData: any, thunkAPI) => {
    try {
      return await registerApi(userData);
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

// Login user
export const login = createAsyncThunk(
  "Auth/login",
  async (userData: any, thunkAPI) => {
    try {
      return await loginApi(userData);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const message = error?.response?.data?.detail || "مشکلی به وجود آمده";

        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

// Forgot Password
export const forgot = createAsyncThunk(
  "Auth/forget-password",
  async (userEmail: any, thunkAPI) => {
    try {
      return await forgetPasswordApi(userEmail);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const message = error?.response?.data?.detail || "مشکلی به وجود آمده";

        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const resetPassword = createAsyncThunk(
  "Auth/reset-password",
  async (userPass: any, thunkAPI) => {
    try {
      return await resetPasswordApi(userPass);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const message = error?.response?.data?.detail || "مشکلی به وجود آمده";

        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);
const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    // Reset helper flags
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.message = "";
    },

    // Logout
    logOut: (state) => {
      state.data = {};
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.data = action.payload;
        state.message = "با موفقیت ثبت نام شدید";
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // Login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        routerHook()("/");

        state.isLoading = false;
        state.isError = false;
        state.data = action.payload.data;
        state.message = "با موفقیت وارد شدید";
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Forgot
      .addCase(forgot.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgot.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.message = "ایمیل بازیابی ارسال شد";
      })
      .addCase(forgot.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // resetPassword
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.message = "رمز عبور با موفقیت تغییر کرد";
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, logOut } = authSlice.actions;
export default authSlice.reducer;

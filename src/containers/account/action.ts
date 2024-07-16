import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import {
  changePasswordApi,
  updateAccountApi,
  deleteAccountApi,
  getAccountApi,
  getAllAccountsApi,
 } from "@/services/accountApi";


type initialStateType = {
data:any;
isLoading: boolean;
isError: boolean;
message: unknown;
dataAllAccounts: any;
dataAccount: any;


};

const initialState: initialStateType = {
data:{},
isLoading: false,
isError: false,
message: "",
dataAllAccounts: {},
dataAccount: {},


};

//  changePassword;
export const changePassword = createAsyncThunk("account/changePassword",
    async (userData:any,thunkAPI)=>{
        try{
            return await changePasswordApi(userData);
        }catch(error:unknown){
            if (error instanceof AxiosError){
              const message = error?.response?.data|| "مشکلی به وجود آمده";

            return thunkAPI.rejectWithValue(message);

            }
        }
    }

);
// updateAccount
export const accountUpdate = createAsyncThunk(
  "Account/update",
  async ({accountId,body}:{accountId:string ,body:any}
    ,thunkAPI) => {
    try {
      return await updateAccountApi(accountId,body);
    }catch (error: unknown) {
      if (error instanceof AxiosError) {
        const message = error?.response?.data || "مشکلی به وجود آمده";
        return thunkAPI.rejectWithValue(message);
      }
    
    }});

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
      return await updateAccountApi(userId, body);
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
      //  changePassword;
      .addCase(changePassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      })
      // updateAccount
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

      // getAllAccounts
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
      // getAccount
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
      // deleteAccount
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

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { changePasswordApi, updateAccountApi } from "@/services/accountApi";
import action from "../auth/action";
type initialStateType = {
data:any;
isLoading: boolean;
isError: boolean;
message: unknown;

};

const initialState: initialStateType = {
data:{},
isLoading: false,
isError: false,
message: "",

};

//  changePassword;
export const changePassword = createAsyncThunk("Account/ChangePass",
    async (userData:any,thunkAPI)=>{
        try{
            return await changePasswordApi(userData);
        }catch(error:unknown){
            if (error instanceof AxiosError){
              const message = error?.response?.data?.detail || "مشکلی به وجود آمده";

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
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      })
      // updateAccountApi
      .addCase(accountUpdate.pending,(state)=>{
        
      })
  },
});
export default accountSlice.reducer;
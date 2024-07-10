import { AxiosError } from "axios";
import {
  changeBoardApi,
  createBoardApi,
  deleteBoardApi,
  getAllBoardsApi,
  getBoardApi,
} from "@/services/boardApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface FetchBoards {
  projectId: projectIdType;
  workspaceId: workspaceIdType;
}
interface FetchBoard extends FetchBoards {
  id: string;
}
interface CreateBoard extends FetchBoards {
  data: boardBody;
}
interface UpdateBoard extends FetchBoard {
  data: boardBody;
}

interface initialStateType {
  isLoading: boolean;
  isError: boolean;
  message: unknown;
  selectedBoardId: string;
  dataBoards: BoardType[];
  dataBoard: BoardType | null;
}

const initialState: initialStateType = {
  isLoading: false,
  isError: false,
  message: "",
  selectedBoardId: "",
  dataBoards: [],
  dataBoard: null,
};

// fetch Boards
const fetchBoards = createAsyncThunk(
  "Boards/fetchBoards",
  async ({ projectId, workspaceId }: FetchBoards, thunkAPI) => {
    try {
      return await getAllBoardsApi(projectId, workspaceId);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const message =
          error?.response?.data?.message || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

// create Board
const createBoard = createAsyncThunk(
  "Boards/createBoard",
  async ({ projectId, workspaceId, data }: CreateBoard, thunkAPI) => {
    try {
      return await createBoardApi(projectId, workspaceId, data);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const message =
          error?.response?.data?.message || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

// fetch select Board
const fetchSelectBoard = createAsyncThunk(
  "Boards/fetchSelectBoard",
  async ({ id, projectId, workspaceId }: FetchBoard, thunkAPI) => {
    try {
      return await getBoardApi(id, projectId, workspaceId);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const message =
          error?.response?.data?.message || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

// delete Board
const deleteBoard = createAsyncThunk(
  "Boards/deleteBoard",
  async ({ id, projectId, workspaceId }: FetchBoard, thunkAPI) => {
    try {
      return await deleteBoardApi(id, projectId, workspaceId);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const message =
          error?.response?.data?.message || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

// rename board
const updateBoard = createAsyncThunk(
  "Boards/editBoardName",
  async ({ id, projectId, workspaceId, data }: UpdateBoard, thunkAPI) => {
    try {
      return await changeBoardApi(id, projectId, workspaceId, data);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const message =
          error?.response?.data?.message || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

const boardsSlice = createSlice({
  name: "Boards",
  initialState,
  reducers: {
    setSelectedBoardId: (state, action) => {
      state.selectedBoardId = action.payload;
    },
    resetBoards: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.message = "";
      state.dataBoards = [];
      state.dataBoard = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBoards.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchBoards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.dataBoards = action.payload;
      })

      .addCase(fetchBoards.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // create board
      .addCase(createBoard.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(createBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.message = "ساخته شد";
        state.dataBoard = action.payload;
      })
      .addCase(createBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // delete board
      .addCase(deleteBoard.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(deleteBoard.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.message = " حذف شد";
      })
      .addCase(deleteBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // update board
      .addCase(updateBoard.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(updateBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.dataBoard = action.payload;
      })
      .addCase(updateBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});
export default boardsSlice.reducer;

export { fetchBoards, createBoard, deleteBoard, fetchSelectBoard, updateBoard };
export const { setSelectedBoardId, resetBoards } = boardsSlice.actions;

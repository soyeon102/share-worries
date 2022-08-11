import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const API_URL = process.env.REACT_APP_API_URL;

export const __getWorries = createAsyncThunk(
  "GET_WORRIES",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`${API_URL}/worries`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addWorry = createAsyncThunk("ADD_WORRY", async (newWorry) => {
  const data = await axios.post(`${API_URL}/worries`, newWorry);
  return data.data;
});

export const __deleteWorry = createAsyncThunk(
  "DELETE_WORRY",
  async (listId) => {
    await axios.delete(`${API_URL}/worries/${listId}`);
    return listId;
  }
);

export const __deleteComment = createAsyncThunk(
  "DELETE_COMMENT",
  async (commentId) => {
    await axios.delete(`${API_URL}/comments/${commentId}`);
    return commentId;
  }
);

export const __editWorry = createAsyncThunk("EDIT_WORRY", async (payload) => {
  await axios.patch(`${API_URL}/worries/${payload.id}`, {
    content: payload.content,
  });
  return payload;
});

export const __getWorryComments = createAsyncThunk(
  "GET_WORRY_COMMENTS",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`${API_URL}/comments`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addComment = createAsyncThunk(
  "ADD_COMMENT",
  async (newComment) => {
    const data = await axios.post(`${API_URL}/comments`, newComment);
    return data.data;
  }
);

export const __editComment = createAsyncThunk(
  "EDIT_COMMENT",
  async (payload) => {
    await axios.patch(`${API_URL}/comments/${payload.id}`, {
      comment: payload.comment,
    });
    return payload;
  }
);

const initialState = {
  worries: [],
  comments: [],
  isLoading: false,
  error: null,
};

export const worrySlice = createSlice({
  name: "worry",
  initialState,
  reducers: {},
  extraReducers: {
    [__getWorries.pending]: (state) => {
      state.isLoading = true;
    },
    [__getWorries.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.worries = action.payload;
    },
    [__getWorries.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__addWorry.fulfilled]: (state, action) => {
      state.worries = [...state.worries, action.payload];
    },
    [__deleteWorry.fulfilled]: (state, action) => {
      state.worries = state.worries.filter(
        (item) => item.id !== action.payload
      );
    },
    [__editWorry.fulfilled]: (state, action) => {
      state.worries = state.worries.map((worry) =>
        worry.id === action.payload.id
          ? { ...worry, content: action.payload.content }
          : worry
      );
    },
    [__getWorryComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__getWorryComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__getWorryComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__addComment.fulfilled]: (state, action) => {
      // state.comments = [...state.comments, action.payload];
      state.comments.push(action.payload);
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.comments = state.comments.filter(
        (item) => item.id !== action.payload
      );
    },
    [__editComment.fulfilled]: (state, action) => {
      state.comments = state.comments.map((comment) =>
        comment.id === action.payload.id
          ? { ...comment, comment: action.payload.comment }
          : comment
      );
    },
  },
});

export default worrySlice.reducer;

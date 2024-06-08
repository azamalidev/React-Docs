// src/redux/slices/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { incrementAsync, decrementAsync } from '../actions/index';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    loading: false,
    error: null,
  },
  // By Manually Dispatch
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    incrementSuccess: (state, action) => {
      state.value = action.payload;
      state.loading = false;
      state.error = null;
    },
    decrementSuccess: (state, action) => {
      state.value = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
  // Builder callback API in Redux Toolkit.
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.value = action.payload;
        state.loading = false;
      })
      .addCase(incrementAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(decrementAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(decrementAsync.fulfilled, (state, action) => {
        state.value = action.payload;
        state.loading = false;
      })
      .addCase(decrementAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setLoading, setError, incrementSuccess, decrementSuccess } = counterSlice.actions;
export default counterSlice.reducer;

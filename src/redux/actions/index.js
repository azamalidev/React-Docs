// src/redux/actions.js
import { createAsyncThunk } from '@reduxjs/toolkit';

export const incrementAsync = createAsyncThunk(
  'counter/increment',
  async (value) => {
    try {
      return value;
    } catch (err) {
      return err.message;
    } 
  }
);

export const decrementAsync = createAsyncThunk(
  'counter/decrement',
  async (value) => {
    try {
      return value;
    } catch (err) {
      return err.message;
    } 
  }
);

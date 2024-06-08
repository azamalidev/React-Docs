// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/index';
import dataReducer from './slices/index'; // Assuming you still want the data slice from before

const store = configureStore({
  reducer: {
    counter: counterReducer,
    data: dataReducer,
  },
});

export default store;

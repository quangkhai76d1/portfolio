import {configureStore} from '@reduxjs/toolkit';
import {globalSlice} from './globalSlice';

const store = configureStore({
  reducer: {
    [globalSlice.name]: globalSlice.reducer,
  },
});

export default store;

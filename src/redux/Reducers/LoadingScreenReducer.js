import { createSlice } from '@reduxjs/toolkit';

export const LoadingScreenSlice = createSlice({
  name: 'screenloading',
  initialState: {
    isLoading: false,

  },
  reducers: {
    setLoader: (state, action) => {
      state.isLoading = action.payload.isLoading;
    },
  },
});

export const { setLoader } = LoadingScreenSlice.actions;

export default LoadingScreenSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import Constants from '../../utils/Constants';

export const environmentSlice = createSlice({
  name: 'environment',
  initialState: {
    apiUrl: Constants.BASE_API_URL_PROD,
    bannerUrl: Constants.BASE_API_URL_PROD,
    environmentalName: Constants.PROD,
  },
  reducers: {
    setEnv: (state, action) => {
      state.apiUrl = action.payload.apiUrl;
      state.bannerUrl = action.payload.bannerUrl;
      state.environmentalName = action.payload.environmentalName;
    },
  },
});

export const { setEnv } = environmentSlice.actions;

export default environmentSlice.reducer;
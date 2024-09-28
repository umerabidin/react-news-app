import { configureStore } from '@reduxjs/toolkit';
import loadingScreenReducer from '../Reducers/LoadingScreenReducer';

export const store = configureStore({
  reducer: {
    screenloading: loadingScreenReducer,
    // Add other reducers here...
  },
});
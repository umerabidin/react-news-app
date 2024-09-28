// import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import userReducer from './reducers';

// const rootReducer = combineReducers({ userReducer });

// export const Store = createStore(rootReducer, applyMiddleware(thunk));

import {configureStore,combineReducers} from '@reduxjs/toolkit';
import ProductReducer from './Actions/ProductSlice';
import environmentReducer from '../redux/Reducers/EnvironmentalSlice';
import LoadingScreenReducer from './Reducers/LoadingScreenReducer';

export const store = configureStore({
  reducer: {
    product: ProductReducer,
    environment: environmentReducer,
    screenloading: LoadingScreenReducer,
    
    
  },
});
import { combineReducers } from 'redux';

import { configureStore } from '@reduxjs/toolkit';
import globalReducer from "redux/global"

const reducers = combineReducers({
  global: globalReducer,
});

export default configureStore({
  reducer: reducers,
});
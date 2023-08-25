import { configureStore } from "@reduxjs/toolkit";
import globalReducer from './globalSlice'


export default configureStore({
  reducer: {
    counter: globalReducer
  }
})
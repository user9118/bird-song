import { configureStore } from "@reduxjs/toolkit";
import globalReducer from './globalSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


const store = configureStore({
  reducer: {
    storage1: globalReducer
  }
})
export default store

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
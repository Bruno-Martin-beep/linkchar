import { configureStore } from "@reduxjs/toolkit";
import popularListSlice from "./App/features/popularSlice";

export const store = configureStore({
  reducer: {
    popularList: popularListSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;

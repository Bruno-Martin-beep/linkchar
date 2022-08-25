import { configureStore } from "@reduxjs/toolkit";
import genresSlice from "./App/features/genresSlice";
import popularListSlice from "./App/features/popularSlice";

export const store = configureStore({
  reducer: {
    popularList: popularListSlice,
    genres: genresSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;

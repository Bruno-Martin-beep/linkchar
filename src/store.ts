import { configureStore } from "@reduxjs/toolkit";
import genresSlice from "./App/features/genresSlice";
import pagesSlice from "./App/features/pagesSlice";
import popularListSlice from "./App/features/popularSlice";
import searchSlice from "./App/features/searchSlice";

export const store = configureStore({
  reducer: {
    popularList: popularListSlice,
    searchList: searchSlice,
    page: pagesSlice,
    genres: genresSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;

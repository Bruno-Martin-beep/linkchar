import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { Movie } from "../types";
import { getPopular } from "./getData";

// Slice Object
///////////////////////////////////////

let initialState: {
  list: Movie[];
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
  hasError: boolean;
} = {
  list: [],
  currentPage: 0,
  totalPages: 0,
  isLoading: false,
  hasError: false,
};

export const popularListSlice = createSlice({
  name: "popularList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPopular.pending, (state) => {
      state.isLoading = true;
      state.hasError = false;
    });
    builder.addCase(getPopular.fulfilled, (state, action) => {
      state.list = [...state.list, ...action.payload.movies];
      state.currentPage = action.payload.currentPage;
      state.totalPages = action.payload.totalPages;
      state.isLoading = false;
      state.hasError = false;
    });
    builder.addCase(getPopular.rejected, (state) => {
      state.isLoading = false;
      state.hasError = true;
    });
  },
});

// Selectors
///////////////////////////////////////

export const selectPopularList = (state: RootState) => state.popularList.list;
export const selectCurrentPage = (state: RootState) =>
  state.popularList.currentPage;
export const selectTotalPages = (state: RootState) =>
  state.popularList.totalPages;
export const selectIsLoading = (state: RootState) =>
  state.popularList.isLoading;
export const selectHasError = (state: RootState) => state.popularList.hasError;

// Exports
///////////////////////////////////////

export default popularListSlice.reducer;

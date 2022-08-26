import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { Movie } from "../types";
import { getSearch } from "./getData";

// Slice Object
///////////////////////////////////////

let initialState: {
  list: Movie[];
  query: string;
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
  hasError: boolean;
} = {
  list: [],
  query: "",
  currentPage: 0,
  totalPages: 0,
  isLoading: false,
  hasError: false,
};

export const searchSlice = createSlice({
  name: "searchList",
  initialState,
  reducers: {
    updateSearch: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSearch.pending, (state) => {
      state.isLoading = true;
      state.hasError = false;
    });
    builder.addCase(getSearch.fulfilled, (state, action) => {
      if (action.payload.currentPage < 2) {
        state.list = [...action.payload.movies];
      } else {
        state.list = [...state.list, ...action.payload.movies];
      }
      state.currentPage = action.payload.currentPage;
      state.totalPages = action.payload.totalPages;
      state.isLoading = false;
      state.hasError = false;
    });
    builder.addCase(getSearch.rejected, (state) => {
      state.isLoading = false;
      state.hasError = true;
    });
  },
});

// Selectors
///////////////////////////////////////

export const selectSearchListList = (state: RootState) => state.searchList.list;
export const selectQuery = (state: RootState) => state.searchList.query;
export const selectCurrentPageSearch = (state: RootState) =>
  state.searchList.currentPage;
export const selectTotalPagesSearch = (state: RootState) =>
  state.searchList.totalPages;
export const selectIsLoadingSearch = (state: RootState) =>
  state.searchList.isLoading;
export const selectHasErrorSearch = (state: RootState) =>
  state.searchList.hasError;

// Exports
///////////////////////////////////////

export const { updateSearch } = searchSlice.actions;

export default searchSlice.reducer;

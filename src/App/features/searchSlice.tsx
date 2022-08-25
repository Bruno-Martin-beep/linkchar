import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { Movie } from "../types";
import { getSearch } from "./getData";

// Slice Object
///////////////////////////////////////

let initialState: {
  list: Movie[];
  query: string;
  isLoading: boolean;
  hasError: boolean;
} = {
  list: [],
  query: "",
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
      state.list = [...action.payload];
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

// Exports
///////////////////////////////////////

export const { updateSearch } = searchSlice.actions;

export default searchSlice.reducer;

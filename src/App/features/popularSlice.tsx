import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { getPopular } from "./getData";

//type
///////////////////////////////////////

export interface PopularMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// Slice Object
///////////////////////////////////////

let initialState: {
  list: PopularMovie[];
  isLoading: boolean;
  hasError: boolean;
} = {
  list: [],
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
      state.list = [...state.list, ...action.payload];
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

// Exports
///////////////////////////////////////

export default popularListSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { getGenresList } from "./getData";
import { RootState } from "../../store";
import genresFallback from "../mocks/genresFallBack";

// Slice Object
///////////////////////////////////////

let initialState: { id: number; name: string }[] = [];

export const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGenresList.fulfilled, (state, action) => {
      return (state = action.payload);
    });
    builder.addCase(getGenresList.rejected, (state) => {
      return (state = genresFallback);
    });
  },
});

// Selectors
///////////////////////////////////////

export const selectGenres = (state: RootState) => state.genres;

// Exports
///////////////////////////////////////

export default genresSlice.reducer;

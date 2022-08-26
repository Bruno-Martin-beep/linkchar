import { createSlice } from "@reduxjs/toolkit";
import { getGenresList } from "./getData";
import { RootState } from "../../store";
import genresFallback from "../mocks/genresFallBack";
import { Genre, GenreColor } from "../types";

// Slice Object
///////////////////////////////////////

let initialState: { allGenrens: GenreColor[]; favGenres: GenreColor[] } = {
  allGenrens: [],
  favGenres: [],
};

const colors: string[] = ["bg-cyan", "bg-orange", "bg-indigo"];

const addColor = (array: Genre[]) => {
  return array.map((genre) => {
    return {
      ...genre,
      color: colors[Math.floor(Math.random() * colors.length)],
    };
  });
};

export const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    addFavGenre: (state, action) => {
      state.favGenres = [...state.favGenres, action.payload];
    },
    removeFavGenre: (state, action) => {
      state.favGenres = state.favGenres.filter(
        (fav) => fav.id !== action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGenresList.fulfilled, (state, action) => {
      state.allGenrens = addColor(action.payload);
    });
    builder.addCase(getGenresList.rejected, (state) => {
      state.allGenrens = addColor(genresFallback);
    });
  },
});

// Selectors
///////////////////////////////////////

export const selectAllGenres = (state: RootState) => state.genres.allGenrens;
export const selectFavGenres = (state: RootState) => state.genres.favGenres;
export const selectUnFavGenres = (state: RootState) => {
  const genresList = selectAllGenres(state);
  const favGenres = selectFavGenres(state);

  const unFavGenres = genresList.filter((genre) => !favGenres.includes(genre));

  return unFavGenres;
};

// Exports
///////////////////////////////////////

export const { addFavGenre, removeFavGenre } = genresSlice.actions;

export default genresSlice.reducer;

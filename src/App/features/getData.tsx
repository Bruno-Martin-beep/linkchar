import { createAsyncThunk } from "@reduxjs/toolkit";
import { getGenres, getPopularMovies } from "../api/fechdata";

// Thunk
///////////////////////////////////////

export const getPopular = createAsyncThunk(
  "movieList/getPopular",
  async (currentPage: number) => {
    // let results = {
    //   movies: [],
    //   currentPage: 0,
    //   totalPages: 0,
    // };

    const data = await getPopularMovies({ page: currentPage });

    return data.results;
  }
);

export const getGenresList = createAsyncThunk(
  "genreList/getGenres",
  async () => {
    const genres = await getGenres();
    return genres.genres;
  }
);

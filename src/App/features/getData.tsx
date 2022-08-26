import { createAsyncThunk } from "@reduxjs/toolkit";
import { getGenres, getPopularMovies, getSearchMovie } from "../api/fechdata";

// Thunk
///////////////////////////////////////

export const getPopular = createAsyncThunk(
  "movieList/getPopular",
  async (currentPage: number) => {
    let results = {
      movies: [],
      currentPage: 0,
      totalPages: 0,
    };

    const data = await getPopularMovies({ page: currentPage });

    results.currentPage = data.page;

    results.totalPages = data.total_pages;

    results.movies = data.results;

    return results;
  }
);

export const getSearch = createAsyncThunk(
  "movieList/getSearch",
  async (info: { query: string; page?: number }) => {
    const data = await getSearchMovie(info);
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

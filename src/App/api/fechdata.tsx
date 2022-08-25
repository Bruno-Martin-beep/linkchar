const API_ORIGIN = "https://api.themoviedb.org/3/";

const API_KEY = "edaa2543d64e6c0ecc3ccf9088da3e41";

export const getData = async (path: string, info?: {}) => {
  const URL_PATH = new URL(path, API_ORIGIN);
  URL_PATH.search = new URLSearchParams(
    Object.entries({ api_key: API_KEY, ...info })
  ).toString();
  const URL_SEARCH = URL_PATH.toString();

  const data = await fetch(URL_SEARCH)
    .then((response) => response.json())

    .catch((error) => {
      console.error("Error:", error);
    });

  return data;
};

export const getPopularMovies = (page?: { page: number }) => {
  return getData("movie/popular", page);
};

export const getNowPlayingMovies = (page?: { page: number }) => {
  return getData("movie/now_playing", page);
};

export const getSearchMovie = (info: { query: string; page?: number }) => {
  return getData("search/movie", info);
};

export const getCountry = (movieID: number) => {
  return getData("movie/" + movieID).then(
    (response) => response.production_countries[0].name
  );
};

export const getGenres = () => {
  return getData("genre/movie/list");
};

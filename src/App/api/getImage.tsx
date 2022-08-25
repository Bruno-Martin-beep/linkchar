const BASE_URL = "https://image.tmdb.org/t/p/";

export const getImage = (path: string) => {
  return BASE_URL + "w500" + path;
};

export const getImageOriginal = (path: string) => {
  return BASE_URL + "original" + path;
};

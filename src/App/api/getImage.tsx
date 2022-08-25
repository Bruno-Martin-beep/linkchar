const BASE_URL = "https://image.tmdb.org/t/p/w500";

export const getImage = (path: string) => {
  return BASE_URL + path;
};

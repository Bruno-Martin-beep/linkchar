import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import playIcon from "../../assets/play.svg";
import starIcon from "../../assets/star.svg";
import { getCountry } from "../api/fechdata";
import { getImage } from "../api/getImage";
import { selectAllGenres } from "../features/genresSlice";
import { Movie } from "../types";

interface prop {
  movie: Movie;
}

const DefaultFilm = ({ movie }: prop) => {
  const genresList = useSelector(selectAllGenres);

  const [country, setCountry] = useState<string>("");

  useEffect(() => {
    getCountry(movie.id).then((country) => setCountry(country));
  }, [movie.id]);

  const movieGenres = movie.genre_ids.map((genreId) => {
    return genresList.find((genre) => genre.id === genreId)?.name;
  });

  return (
    <div className="flex-shrink-0 lg:flex-shrink movie-card relative w-[75rem] sm:w-[40rem] lg:w-full aspect-[16/9] rounded-[4rem] sm:rounded-[3.25rem] lg:rounded-3xl overflow-hidden isolate">
      <div className="absolute w-full h-full bg-gradient-to-r from-neutral-500 via-neutral-900 to-neutral-500 z-0" />
      <img
        src={getImage(movie.backdrop_path)}
        className="absolute top-1/2 -translate-y-1/2 w-full z-0"
        alt=""
      />
      <div className="movie-card-info absolute bottom-0 left-0 w-full h-64 sm:h-32 lg:h-16 px-16 sm:px-12 lg:px-6 rounded-[2.5rem] sm:rounded-3xl lg:rounded-xl bg-neutral-700/50 backdrop-blur-sm transition-[height] z-10 isolate">
        <div className="movie-card-info-base flex items-center w-full h-full transition-opacity">
          <img
            src={playIcon}
            className="w-20 h-20 sm:w-14 sm:h-14 lg:w-8 lg:h-8 mr-16 sm:mr-6 cursor-pointer"
            alt="play"
          />
          <div className="flex-grow">
            <p className="w-[44rem] sm:w-[22rem] lg:w-36 text-5xl sm:text-3xl lg:text-[0.8rem] lg:leading-4 font-bold truncate">
              {movie.title}
            </p>
            <p className="w-[44rem] sm:w-[22rem] lg:w-36 text-5xl sm:text-2xl lg:text-xs mt-4 sm:mt-2 lg:mt-0.5 text-neutral-50/80 truncate">
              {movieGenres.slice(0, 2).join(" / ")}
            </p>
          </div>
          <div className="w-1.5 h-20 sm:w-[0.275rem] sm:h-16 lg:w-[0.15rem] lg:h-8 mr-12 sm:mr-6 lg:mr-3 bg-gradient-to-b from-neutral-700/10 via-neutral-50 to-neutral-700/10" />
          <img
            src={starIcon}
            className="w-10 h-10 sm:w-6 sm:h-6 lg:w-3 lg:h-3 mr-4 sm:mr-2.5 lg:mr-1"
            alt="star"
          />
          <p className="text-5xl sm:text-2xl lg:text-xs font-semibold">
            {movie.vote_average}
          </p>
        </div>
        <div className="movie-card-info-hover absolute top-100 space-y-10 sm:space-y-6 lg:space-y-2 left-0 w-full h-full py-12 sm:py-10 lg:py-6 px-16 sm:px-10 lg:px-6 overflow-auto z-10">
          <p className="text-7xl sm:text-[2rem] lg:text-sm font-bold">
            {movie.title}
          </p>
          <p className="text-5xl sm:text-3xl lg:text-xs text-neutral-50/80">
            Country: {country}
          </p>
          <p className="text-5xl sm:text-3xl lg:text-[0.8rem] lg:leading-4  text-neutral-50/80">
            {movie.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DefaultFilm;

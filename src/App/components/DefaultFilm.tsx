import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import playIcon from "../../assets/play.svg";
import starIcon from "../../assets/star.svg";
import { getCountry } from "../api/fechdata";
import { getImage } from "../api/getImage";
import { selectGenres } from "../features/genresSlice";
import { Movie } from "../types";

interface prop {
  movie: Movie;
}

const DefaultFilm = ({ movie }: prop) => {
  const genresList = useSelector(selectGenres);

  const [country, setCountry] = useState<string>("");

  useEffect(() => {
    getCountry(movie.id).then((country) => setCountry(country));
  }, [movie.id]);

  const movieGenres = movie.genre_ids.map((genreId) => {
    return genresList.find((genre) => genre.id === genreId)?.name;
  });

  return (
    <div className="movie-card relative w-full aspect-[16/9] rounded-3xl overflow-hidden isolate">
      <div className="absolute w-full h-full bg-gradient-to-r from-neutral-500 via-neutral-900 to-neutral-500 z-0" />
      <img
        src={getImage(movie.backdrop_path)}
        className="absolute top-1/2 -translate-y-1/2 w-full z-0"
        alt=""
      />
      <div className="movie-card-info absolute bottom-0 left-0 w-full h-16 px-6 rounded-xl bg-neutral-700/50 backdrop-blur-sm transition-[height] z-10 isolate">
        <div className="movie-card-info-base flex items-center w-full h-full transition-opacity">
          <img
            src={playIcon}
            className="w-8 h-8 mr-6 cursor-pointer"
            alt="play"
          />
          <div className="flex-grow">
            <p className="w-36 text-[0.8rem] font-bold truncate">
              {movie.title}
            </p>
            <p className="w-36 text-xs text-neutral-50/80 truncate">
              {movieGenres.slice(0, 2).join(" / ")}
            </p>
          </div>
          <div className=" w-[0.15rem] h-8 mr-3 bg-gradient-to-b from-neutral-700/10 via-neutral-50 to-neutral-700/10" />
          <img src={starIcon} className="w-3 h-3 mr-1" alt="star" />
          <p className="text-xs font-semibold">{movie.vote_average}</p>
        </div>
        <div className="movie-card-info-hover absolute top-100 space-y-2 left-0 w-full h-full py-4 px-6 overflow-auto z-10">
          <p className="text-sm font-bold">{movie.title}</p>
          <p className="text-xs text-neutral-50/80">Country: {country}</p>
          <p className="text-[0.8rem] text-neutral-50/80">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default DefaultFilm;

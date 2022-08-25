import { useEffect } from "react";
import { useSelector } from "react-redux";
import playIcon from "../../assets/play.svg";
import starIcon from "../../assets/star.svg";
import { getImage } from "../api/getImage";
import { selectGenres } from "../features/genresSlice";
import { PopularMovie } from "../features/popularSlice";

interface prop {
  movie: PopularMovie;
}

const DefaultFilm = ({ movie }: prop) => {
  const genresList = useSelector(selectGenres);

  const movieGenres = movie.genre_ids.map((genreId) => {
    return genresList.find((genre) => genre.id === genreId)?.name;
  });

  return (
    <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden isolate">
      <div className="absolute w-full h-full bg-gradient-to-r from-neutral-500 via-neutral-900 to-neutral-500 z-0" />
      <img
        src={getImage(movie.backdrop_path)}
        className="absolute w-full h-full z-0"
        alt=""
      />
      <div className="flex items-center absolute bottom-0 left-0 w-full h-16 px-6 rounded-xl bg-neutral-700/50 backdrop-blur-sm z-10">
        <img src={playIcon} className="w-8 h-8 mr-6" alt="play" />
        <div className="flex-grow">
          <p className="w-36 text-[0.8rem] font-bold truncate">{movie.title}</p>
          <p className="w-36 text-xs truncate">
            {movieGenres.slice(0, 2).join(" / ")}
          </p>
        </div>
        <div className=" w-[0.15rem] h-8 mr-3 bg-gradient-to-b from-neutral-700/10 via-neutral-50 to-neutral-700/10" />
        <img src={starIcon} className="w-3 h-3 mr-1" alt="star" />
        <p className="text-xs font-semibold">{movie.vote_average}</p>
      </div>
    </div>
  );
};

export default DefaultFilm;

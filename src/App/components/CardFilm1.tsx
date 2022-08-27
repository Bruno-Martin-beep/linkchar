import playIcon from "../../assets/play.svg";
import { getImage } from "../api/getImage";
import { Movie } from "../types";

interface prop {
  movie: Movie;
}

const CardFilm1 = ({ movie }: prop) => {
  return (
    <div className="shrink-0 sm:shrink relative w-[75rem] sm:w-full aspect-[21/9] rounded-[4rem] sm:rounded-3xl overflow-hidden isolate">
      <div className="absolute top-12 left-12 sm:top-4 sm:left-8 py-3 px-6 sm:py-1 sm:px-3 rounded-full text-5xl sm:text-xs font-semibold bg-neutral-50/50 z-10 backdrop-blur-sm">
        #1 Trending 🔥
      </div>
      <div className="absolute w-full h-full bg-gradient-to-r from-neutral-500 via-neutral-900 to-neutral-500 z-0" />
      <img
        src={getImage(movie.backdrop_path)}
        className="absolute top-1/2 -translate-y-1/2 w-full h-full z-0"
        alt=""
      />
      <div className="flex items-center absolute bottom-0 left-0 w-full h-48 sm:h-20 px-12 sm:px-8 rounded-[2.5rem] sm:rounded-xl bg-neutral-700/50 backdrop-blur-sm z-10">
        <img
          src={playIcon}
          className="w-20 h-20 sm:w-8 sm:h-8 mr-6 cursor-pointer"
          alt="play"
        />
        <div className="flex-grow">
          <p className="w-[40rem] sm:w-60 text-5xl sm:text-[0.8rem] font-bold truncate">
            {movie.title}
          </p>
          <p className="text-5xl sm:text-xs mt-4 sm:mt-1 text-neutral-50/80">
            3h ago
          </p>
        </div>
        <div className="w-1.5 h-20 sm:w-[0.15rem] sm:h-8 bg-gradient-to-b from-neutral-700/10 via-neutral-50 to-neutral-700/10" />
        <p className="py-3 px-6 sm:py-1 sm:px-3 ml-8 sm:ml-4 rounded-full text-5xl sm:text-xs font-semibold bg-neutral-50 text-black ">
          02:28:05
        </p>
      </div>
    </div>
  );
};

export default CardFilm1;

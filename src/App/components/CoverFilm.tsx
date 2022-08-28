import playTrans from "../../assets/play-trans.svg";
import { getImageOriginal } from "../api/getImage";
import { Movie } from "../types";

interface prop {
  movie: Movie;
}

const CoverFilm = ({ movie }: prop) => {
  return (
    <div className="mx-20 lg:mx-0">
      <div className="relative w-full aspect-[18/9] sm:aspect-[21/9] lg:aspect-[25/4] rounded-[8rem] sm:rounded-[5rem] lg:rounded-3xl overflow-hidden isolate">
        <div className="absolute w-full h-full bg-gradient-to-r from-neutral-500 via-neutral-900 to-neutral-500 z-0" />
        <img
          src={getImageOriginal(movie.backdrop_path)}
          className="absolute top-1/2 -translate-y-1/2 w-full z-0"
          alt=""
        />
        <div className="flex items-center space-x-12 sm:space-x-8 lg:space-x-3 absolute top-16 left-16 sm:top-14 sm:left-14 lg:top-4 lg:left-4 z-10">
          <div className="flex -space-x-2">
            <div className="w-20 h-20 sm:w-16 sm:h-16 lg:w-6 lg:h-6 rounded-full ring-1 ring-white bg-neutral-500"></div>
            <div className="w-20 h-20 sm:w-16 sm:h-16 lg:w-6 lg:h-6 rounded-full ring-1 ring-white bg-neutral-500"></div>
          </div>
          <p className="text-5xl sm:text-2xl lg:text-xs font-semibold drop-shadow">
            +2 friends are watching
          </p>
        </div>
        <div className="flex items-center space-x-6 sm:space-x-4 lg:space-x-2 absolute bottom-16 left-16 sm:bottom-14 sm:left-14 lg:bottom-4 lg:left-4 px-8 py-6 sm:px-5 sm:py-3 lg:px-3 lg:py-1.5 rounded-3xl sm:rounded-xl lg:rounded-md bg-neutral-500/50 z-10">
          <img
            src={playTrans}
            className="w-20 h-20 sm:w-14 sm:h-14 lg:w-6 lg:h-6"
            alt="play"
          />
          <p className="text-5xl sm:text-2xl lg:text-xs font-semibold">
            Watch Now
          </p>
        </div>
        <h1 className="absolute right-16 bottom-14 sm:right-12 sm:bottom-9 lg:right-8 lg:bottom-4 w-[50rem] lg:w-[40rem] text-[5rem] sm:text-[4.25rem] lg:text-[3.5rem] text-end axiforma uppercase truncate drop-shadow z-10">
          {movie.title}
        </h1>
      </div>
    </div>
  );
};

export default CoverFilm;

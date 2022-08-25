import playTrans from "../../assets/play-trans.svg";
import { getImageOriginal } from "../api/getImage";
import { Movie } from "../types";

interface prop {
  movie: Movie;
}

const CoverFilm = ({ movie }: prop) => {
  return (
    <div className="relative w-full aspect-[25/4] rounded-3xl overflow-hidden isolate">
      <div className="absolute w-full h-full bg-gradient-to-r from-neutral-500 via-neutral-900 to-neutral-500 z-0" />
      <img
        src={getImageOriginal(movie.backdrop_path)}
        className="absolute top-1/2 -translate-y-1/2 w-full z-0"
        alt=""
      />
      <div className="flex items-center space-x-3 absolute top-4 left-4 z-10">
        <div className="flex -space-x-2">
          <div className="h-6 w-6 rounded-full ring-1 ring-white bg-neutral-500"></div>
          <div className="h-6 w-6 rounded-full ring-1 ring-white bg-neutral-500"></div>
        </div>
        <p className="text-xs font-semibold drop-shadow">
          +2 friends are watching
        </p>
      </div>
      <div className="flex items-center space-x-2 absolute bottom-4 left-4 px-3 py-1.5 rounded-md bg-neutral-500/50 z-10">
        <img src={playTrans} className="w-6 h-6" alt="play" />
        <p className="text-xs font-semibold">Watch Now</p>
      </div>
      <h1 className="absolute right-8 bottom-4 w-[30rem] text-[3.5rem] text-end axiforma uppercase truncate drop-shadow z-10">
        {movie.title}
      </h1>
    </div>
  );
};

export default CoverFilm;

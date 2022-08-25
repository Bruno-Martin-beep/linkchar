import pauseIcon from "../../assets/pause-trans.svg";
import sunIcon from "../../assets/sun.svg";
import inputRange from "../../assets/input-range.svg";
import options from "../../assets/options.svg";
import sound from "../../assets/sound.svg";
import fullScreen from "../../assets/fullscreen.svg";
import { getImage } from "../api/getImage";
import { format } from "date-fns";
import { Movie } from "../types";

interface prop {
  movie: Movie;
}

const CardFilm2 = ({ movie }: prop) => {
  const releaseDate = format(new Date(movie.release_date), "MMM yyyy");

  return (
    <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden isolate">
      <div className="flex items-center space-x-3 absolute top-4 left-8 z-10">
        <div className="flex -space-x-2">
          <div className="h-6 w-6 rounded-full ring-1 ring-white bg-neutral-500"></div>
          <div className="h-6 w-6 rounded-full ring-1 ring-white bg-neutral-500"></div>
        </div>
        <p className="text-xs font-semibold drop-shadow">2 viewers</p>
      </div>
      <div className="absolute w-full h-full bg-gradient-to-r from-neutral-500 via-neutral-900 to-neutral-500 z-0" />
      <img
        src={getImage(movie.backdrop_path)}
        className="absolute top-1/2 -translate-y-1/2 w-full h-full z-0"
        alt=""
      />
      <div className="absolute bottom-20 left-8 mb-2">
        <p className="w-60 text-[0.8rem] font-bold truncate drop-shadow-2xl">
          {movie.title}
        </p>
        <p className="text-xs text-neutral-50/50 drop-shadow-2xl">
          {releaseDate}
        </p>
      </div>
      <div className="flex flex-col items-center space-y-1 absolute top-8 right-4">
        <img src={sunIcon} className="w-3 h-3" alt="" />
        <input
          type="range"
          className="lightInput w-1.5 h-[4.25rem] rounded"
          min="0"
          max="100"
        />
      </div>
      <div className="flex items-center absolute bottom-0 left-0 w-full h-20 pl-8 pr-4 rounded-xl bg-neutral-700/50 backdrop-blur-sm z-10">
        <img
          src={pauseIcon}
          className="w-8 h-8 mr-6 cursor-pointer"
          alt="play"
        />
        <div className="flex-grow flex items-center space-x-4">
          <p className="text-xs text-neutral-50/80">32:47</p>
          <img src={inputRange} className="h-2" alt="" />
          <p className="text-xs text-neutral-50/80">02:34:28</p>
        </div>
        <div className="w-[0.15rem] h-8 bg-gradient-to-b from-neutral-700/10 via-neutral-50 to-neutral-700/10" />
        <div className="flex items-center space-x-3 ml-3">
          <img src={options} className="w-3" alt="" />
          <img src={sound} className="w-[0.8rem]" alt="" />
          <img src={fullScreen} className="w-3" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CardFilm2;

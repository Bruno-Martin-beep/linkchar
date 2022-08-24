import playIcon from "../assets/play.svg";
import starIcon from "../assets/star.svg";

const DefaultFilm = () => {
  return (
    <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden isolate">
      <div className="absolute w-full h-full bg-gradient-to-r from-neutral-500 via-neutral-900 to-neutral-500 z-0" />
      <div className="flex items-center absolute bottom-0 left-0 w-full h-16 px-6 rounded-xl bg-red-500 z-10">
        <img src={playIcon} className="w-8 h-8 mr-6" alt="play" />
        <div className="flex-grow">
          <p className="text-[0.8rem] font-bold">Title</p>
          <p className="text-xs">Genre / Genre</p>
        </div>
        <div className="w-[0.15rem] h-8 mr-3 bg-gradient-to-b from-neutral-700/10 via-neutral-50 to-neutral-700/10" />
        <img src={starIcon} className="w-3 h-3 mr-1" alt="star" />
        <p className="text-xs font-semibold">4.8</p>
      </div>
    </div>
  );
};

export default DefaultFilm;

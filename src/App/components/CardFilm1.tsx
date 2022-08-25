import playIcon from "../../assets/play.svg";

const CardFilm1 = () => {
  return (
    <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden isolate">
      <div className="absolute top-4 left-8 py-1 px-3 rounded-full text-xs font-semibold bg-neutral-50/50 z-10 backdrop-blur-sm">
        #1 Trending 🔥
      </div>
      <div className="absolute w-full h-full bg-gradient-to-r from-neutral-500 via-neutral-900 to-neutral-500 z-0" />
      <div className="flex items-center absolute bottom-0 left-0 w-full h-20 px-8 rounded-xl bg-red-500 z-10">
        <img src={playIcon} className="w-8 h-8 mr-6" alt="play" />
        <div className="flex-grow">
          <p className="text-[0.8rem] font-bold">Title</p>
          <p className="text-xs">3h ago</p>
        </div>
        <div className="w-[0.15rem] h-8 bg-gradient-to-b from-neutral-700/10 via-neutral-50 to-neutral-700/10" />
        <p className="py-1 px-3 rounded-full text-xs font-semibold bg-neutral-50 text-black ml-4">
          02:28:05
        </p>
      </div>
    </div>
  );
};

export default CardFilm1;
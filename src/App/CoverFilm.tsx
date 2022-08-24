import playTrans from "../assets/play-trans.svg";

const CoverFilm = () => {
  return (
    <div className="relative w-full aspect-[25/4] rounded-3xl overflow-hidden isolate">
      <div className="absolute w-full h-full bg-gradient-to-r from-neutral-500 via-neutral-900 to-neutral-500 z-0" />
      <div className="flex items-center space-x-3 absolute top-4 left-4 z-10">
        <div className="flex -space-x-2">
          <div className="h-6 w-6 rounded-full ring-1 ring-white bg-neutral-500"></div>
          <div className="h-6 w-6 rounded-full ring-1 ring-white bg-neutral-500"></div>
        </div>
        <p className="text-xs font-semibold">+2 friends are watching</p>
      </div>
      <div className="flex items-center space-x-2 absolute bottom-4 left-4 px-3 py-1.5 rounded-md bg-neutral-500/50 z-10">
        <img src={playTrans} className="w-6 h-6" alt="play" />
        <p className="text-xs font-semibold">Watch Now</p>
      </div>
      <h1 className="absolute right-8 bottom-4 text-[3.5rem] axiforma uppercase z-10">
        Title
      </h1>
    </div>
  );
};

export default CoverFilm;

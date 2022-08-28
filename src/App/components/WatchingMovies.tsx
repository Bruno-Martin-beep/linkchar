import { useSelector } from "react-redux";
import { selectPopularList } from "../features/popularSlice";
import CardFilm1 from "./CardFilm1";
import CardFilm2 from "./CardFilm2";

const WatchingMovies = () => {
  const popularList = useSelector(selectPopularList);

  return (
    <div>
      <div className="flex justify-between mx-20 lg:mx-0">
        <div className="flex items-center">
          <h2 className="text-7xl sm:text-5xl lg:text-xl font-bold">
            Continue Watching
          </h2>
          <div className="w-1 h-12 sm:w-[0.15rem] sm:h-8 lg:w-[0.1rem] lg:h-5 mx-6 bg-neutral-500/50"></div>
          <p className="text-5xl sm:text-3xl lg:text-sm text-neutral-500">
            4 Movies
          </p>
        </div>
        <div className="flex items-center space-x-6 sm:space-x-5 lg:space-x-3 ">
          <p className="text-5xl sm:text-3xl lg:text-sm text-neutral-500">
            All movies
          </p>
          <p className="text-5xl sm:text-3xl lg:text-sm text-neutral-500">
            {">"}
          </p>
        </div>
      </div>
      {popularList.length !== 0 && (
        <div className="flex sm:w-full space-x-20 sm:space-x-16 lg:space-x-8 mt-24 sm:mt-16 lg:mt-4 px-20 lg:px-0 overflow-auto">
          <CardFilm1 movie={popularList[5]} />
          <CardFilm2 movie={popularList[6]} />
        </div>
      )}
    </div>
  );
};

export default WatchingMovies;

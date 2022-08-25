import { useSelector } from "react-redux";
import { selectPopularList } from "../features/popularSlice";
import CardFilm1 from "./CardFilm1";
import CardFilm2 from "./CardFilm2";

const WatchingMovies = () => {
  const popularList = useSelector(selectPopularList);

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <h2 className="text-xl font-bold">Continue Watching</h2>
          <div className="w-[0.1rem] h-5 mx-6 bg-neutral-500/50"></div>
          <p className="text-sm text-neutral-500">4 Movies</p>
        </div>
        <div className="flex items-center space-x-3 ">
          <p className="text-sm text-neutral-500">All movies</p>
          <p className="text-sm text-neutral-500">{">"}</p>
        </div>
      </div>
      {popularList.length !== 0 && (
        <div className="flex w-full space-x-8 mt-4">
          <CardFilm1 movie={popularList[5]} />
          <CardFilm2 movie={popularList[6]} />
        </div>
      )}
    </div>
  );
};

export default WatchingMovies;

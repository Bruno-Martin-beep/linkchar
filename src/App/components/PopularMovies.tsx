import { useSelector } from "react-redux";
import { selectPopularList } from "../features/popularSlice";
import DefaultFilm from "./DefaultFilm";

const PopularMovies = () => {
  const popularList = useSelector(selectPopularList);

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">Popular movies 2022</h2>
        <div className="flex items-center space-x-3 ">
          <p className="text-sm text-neutral-500">All movies</p>
          <p className="text-sm text-neutral-500">{">"}</p>
        </div>
      </div>
      {popularList.length !== 0 && (
        <div className="flex w-full space-x-8 mt-4">
          <DefaultFilm movie={popularList[0]} />
          <DefaultFilm movie={popularList[1]} />
          <DefaultFilm movie={popularList[2]} />
        </div>
      )}
    </div>
  );
};

export default PopularMovies;

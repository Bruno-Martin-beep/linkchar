import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { statePopular } from "../features/pagesSlice";
import { selectPopularList } from "../features/popularSlice";
import DefaultFilm from "./DefaultFilm";

const PopularMovies = () => {
  const popularList = useSelector(selectPopularList);
  const dispatch = useDispatch<AppDispatch>();

  const handleAllMovies = () => {
    dispatch(statePopular());
  };

  return (
    <div>
      <div className="flex justify-between mx-20 lg:mx-0">
        <h2 className="text-7xl sm:text-5xl lg:text-xl font-bold">
          Popular movies 2022
        </h2>
        <div
          className="flex items-center space-x-6 sm:space-x-5 lg:space-x-3 cursor-pointer"
          onClick={handleAllMovies}
        >
          <p className="text-5xl sm:text-3xl lg:text-sm text-neutral-500">
            All movies
          </p>
          <p className="text-5xl sm:text-3xl lg:text-sm text-neutral-500">
            {">"}
          </p>
        </div>
      </div>
      {popularList.length !== 0 && (
        <div className="flex w-full space-x-20 sm:space-x-16 lg:space-x-8 mt-24 sm:mt-16 lg:mt-4 px-20 lg:px-0 overflow-auto lg:overflow-hidden">
          {popularList.slice(0, 3).map((movie) => {
            return <DefaultFilm key={movie.id} movie={movie} />;
          })}
        </div>
      )}
    </div>
  );
};

export default PopularMovies;

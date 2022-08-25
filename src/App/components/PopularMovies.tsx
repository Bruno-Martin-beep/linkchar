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
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">Popular movies 2022</h2>
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={handleAllMovies}
        >
          <p className="text-sm text-neutral-500">All movies</p>
          <p className="text-sm text-neutral-500">{">"}</p>
        </div>
      </div>
      {popularList.length !== 0 && (
        <div className="flex w-full space-x-8 mt-4">
          {popularList.slice(0, 3).map((movie) => {
            return <DefaultFilm key={movie.id} movie={movie} />;
          })}
        </div>
      )}
    </div>
  );
};

export default PopularMovies;

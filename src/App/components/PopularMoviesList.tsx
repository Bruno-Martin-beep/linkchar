import { useSelector } from "react-redux";
import { selectPopularList } from "../features/popularSlice";
import DefaultFilm from "./DefaultFilm";

const PopularMoviesList = () => {
  const popularList = useSelector(selectPopularList);

  return (
    <div className="w-full h-full pt-[6.1rem] px-[6rem] overflow-auto">
      <h2 className="mt-8 text-xl font-bold">Popular movies</h2>
      {popularList.length !== 0 && (
        <div className="grid grid-cols-4 gap-8 w-full mt-8">
          {popularList.map((movie) => {
            return <DefaultFilm key={movie.id} movie={movie} />;
          })}
        </div>
      )}
    </div>
  );
};

export default PopularMoviesList;

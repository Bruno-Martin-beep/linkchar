import { useSelector } from "react-redux";
import { selectQuery, selectSearchListList } from "../features/searchSlice";
import DefaultFilm from "./DefaultFilm";

const SearchMoviesList = () => {
  const searchList = useSelector(selectSearchListList);
  const query = useSelector(selectQuery);

  return (
    <div className="w-full h-full pt-[6.1rem] px-[6rem] overflow-auto">
      <h2 className="mt-8 text-xl font-bold">{query}</h2>
      {searchList.length !== 0 && (
        <div className="grid grid-cols-4 gap-8 w-full mt-8">
          {searchList.map((movie) => {
            return <DefaultFilm key={movie.id} movie={movie} />;
          })}
        </div>
      )}
    </div>
  );
};

export default SearchMoviesList;

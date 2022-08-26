import { useDispatch, useSelector } from "react-redux";
import { Waypoint } from "react-waypoint";
import { AppDispatch } from "../../store";
import { getPopular } from "../features/getData";
import {
  selectCurrentPage,
  selectHasError,
  selectIsLoading,
  selectPopularList,
  selectTotalPages,
} from "../features/popularSlice";
import DefaultFilm from "./DefaultFilm";

const PopularMoviesList = () => {
  const popularList = useSelector(selectPopularList);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  const isLoading = useSelector(selectIsLoading);
  const hasError = useSelector(selectHasError);
  const dispatch = useDispatch<AppDispatch>();

  const handleOnscroll = () => {
    if (isLoading || hasError) return null;
    if (currentPage < 1) return null;
    if (currentPage >= totalPages) return null;

    dispatch(getPopular(currentPage + 1));
  };

  return (
    <div
      className="w-full mt-[6.1rem] px-[6rem] overflow-auto"
      style={{ height: "calc(100vh - 6.1rem)" }}
    >
      <h2 className="mt-8 text-xl font-bold">Popular movies</h2>
      {popularList.length !== 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full mt-8">
          {popularList.map((movie) => {
            return <DefaultFilm key={movie.id} movie={movie} />;
          })}
        </div>
      )}
      <Waypoint onEnter={handleOnscroll} />
      <div className="w-full h-20" />
    </div>
  );
};

export default PopularMoviesList;

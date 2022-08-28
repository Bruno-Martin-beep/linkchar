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
    <div className="w-full h-[calc(100vh-40rem)] sm:h-[calc(100vh-20rem)] lg:h-[calc(100vh-6rem)] mt-80 sm:mt-40 lg:mt-24 mb-80 sm:mb-40 lg:mb-0 px-[6rem] overflow-auto">
      <h2 className="mt-24 sm:mt-16 lg:mt-8 ml-24 sm:ml-0 text-7xl sm:text-5xl lg:text-xl font-bold">
        Popular movies
      </h2>
      {popularList.length !== 0 && (
        <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 sm:gap-16 lg:gap-8 w-full mt-24 sm:mt-16 lg:mt-8">
          {popularList.map((movie) => {
            return <DefaultFilm key={movie.id} movie={movie} />;
          })}
        </div>
      )}
      <Waypoint onEnter={handleOnscroll} />
      <div className="w-full h-80 sm:h-48 lg:h-20" />
    </div>
  );
};

export default PopularMoviesList;

import { useDispatch, useSelector } from "react-redux";
import { Waypoint } from "react-waypoint";
import { AppDispatch } from "../../store";
import { getSearch } from "../features/getData";
import {
  selectCurrentPageSearch,
  selectHasErrorSearch,
  selectIsLoadingSearch,
  selectQuery,
  selectSearchListList,
  selectTotalPagesSearch,
} from "../features/searchSlice";
import DefaultFilm from "./DefaultFilm";

const SearchMoviesList = () => {
  const searchList = useSelector(selectSearchListList);
  const query = useSelector(selectQuery);
  const currentPageSearch = useSelector(selectCurrentPageSearch);
  const totalPagesSearch = useSelector(selectTotalPagesSearch);
  const isLoadingSearch = useSelector(selectIsLoadingSearch);
  const hasErrorSearch = useSelector(selectHasErrorSearch);
  const dispatch = useDispatch<AppDispatch>();

  const handleOnscroll = () => {
    if (isLoadingSearch || hasErrorSearch) return null;
    if (currentPageSearch < 1) return null;
    if (currentPageSearch >= totalPagesSearch) return null;

    dispatch(getSearch({ query: query, page: currentPageSearch + 1 }));
  };

  return (
    <div
      className="w-full mt-[6.1rem] px-[6rem] overflow-auto"
      style={{ height: "calc(100vh - 6.1rem)" }}
    >
      <h2 className="mt-8 text-xl font-bold">{query}</h2>
      {searchList.length !== 0 && (
        <div className="grid grid-cols-4 gap-8 w-full mt-8">
          {searchList.map((movie) => {
            return <DefaultFilm key={movie.id} movie={movie} />;
          })}
        </div>
      )}
      <Waypoint onEnter={handleOnscroll} />
      <div className="w-full h-20" />
    </div>
  );
};

export default SearchMoviesList;

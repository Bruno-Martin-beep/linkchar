import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import searchIcon from "../../assets/search-icon.svg";
import { AppDispatch } from "../../store";
import { getSearch } from "../features/getData";
import { stateHome, stateSearch } from "../features/pagesSlice";
import { updateSearch } from "../features/searchSlice";

const Search = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (value !== "") {
      dispatch(stateSearch());
      dispatch(updateSearch(value));
      dispatch(getSearch({ query: value, page: 1 }));
    } else {
      dispatch(stateHome());
    }
  }, [dispatch, value]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex static sm:absolute top-1/2 left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 lg:static lg:translate-x-0 lg:translate-y-0">
      <label className="flex items-center space-x-6 sm:space-x-4 lg:space-x-2 py-6 sm:py-4 lg:py-2 pr:12 sm:pr-8 lg:pr-4 pl-6 sm:pl-4 lg:pl-2 rounded-full bg-neutral-500/50 outline outline-2 outline-transparent focus-within:outline-neutral-50">
        <img
          src={searchIcon}
          className="w-24 h-24 sm:w-16 sm:h-16 lg:w-8 lg:h-8"
          alt="search"
        />
        <input
          type="text"
          value={value}
          className="w-[30rem] sm:w-80 lg:w-40 text-5xl sm:text-3xl lg:text-base bg-transparent focus-visible:outline-none"
          onChange={handleInput}
        />
      </label>
    </div>
  );
};

export default Search;

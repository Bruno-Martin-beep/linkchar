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
    <div className="flex">
      <label className="flex items-center space-x-2 py-2 pr-4 pl-2 rounded-full bg-neutral-500/50 outline outline-[0.2rem] outline-transparent focus-within:outline-neutral-50">
        <img src={searchIcon} className="w-8 h-8" alt="search" />
        <input
          type="text"
          value={value}
          className="w-40 bg-transparent focus-visible:outline-none"
          onChange={handleInput}
        />
      </label>
    </div>
  );
};

export default Search;

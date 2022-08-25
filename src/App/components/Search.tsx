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
    <>
      <input
        type="text"
        value={value}
        className="bg-black"
        onChange={handleInput}
      />
      <img src={searchIcon} className="w-8 h-8" alt="search" />
    </>
  );
};

export default Search;

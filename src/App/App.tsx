import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Panel from "./components/Panel";
import PopularMoviesList from "./components/PopularMoviesList";
import SearchMoviesList from "./components/SearchMoviesList";
import { getGenresList, getPopular } from "./features/getData";
import { selectPage } from "./features/pagesSlice";

function App() {
  const page = useSelector(selectPage);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getGenresList());
    dispatch(getPopular(1));
  }, [dispatch]);

  return (
    <div className="bg-black w-full h-screen">
      <Navbar />
      {page === "home" && (
        <>
          <Home />
          <Panel />
        </>
      )}
      {page === "search" && <SearchMoviesList />}
      {page === "popular" && <PopularMoviesList />}
    </div>
  );
}

export default App;

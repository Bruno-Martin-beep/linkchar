import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
// import { getPopularMovies } from "./api/fechdata";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Panel from "./components/Panel";
import { getGenresList, getPopular } from "./features/getData";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    // getPopularMovies({ page: 1 }).then((response) => console.log(response));

    dispatch(getGenresList());
    dispatch(getPopular(1));
  }, [dispatch]);

  return (
    <div className="bg-black w-full h-screen">
      <Navbar />
      <Home />
      <Panel />
    </div>
  );
}

export default App;

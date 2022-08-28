import { useEffect, useState } from "react";
import CoverFilm from "./CoverFilm";
import WatchingMovies from "./WatchingMovies";
import PopularMovies from "./PopularMovies";
import { useSelector } from "react-redux";
import { selectPopularList } from "../features/popularSlice";

const Home = () => {
  const popularList = useSelector(selectPopularList);
  const [random, setRandom] = useState<number>(0);

  useEffect(() => {
    setRandom(Math.floor(Math.random() * popularList.length));
  }, [popularList]);

  return (
    <div className="w-full h-full pt-80 sm:pt-40 lg:pt-24 pb-80 sm:pb-40 lg:pb-0 lg:pl-[29.1rem]">
      <div className="w-full h-full pt-12 lg:pr-16 pb-12 lg:pl-20 space-y-24 sm:space-y-16 lg:space-y-8 overflow-auto">
        {popularList.length !== 0 && <CoverFilm movie={popularList[random]} />}
        <WatchingMovies />
        <PopularMovies />
      </div>
    </div>
  );
};

export default Home;

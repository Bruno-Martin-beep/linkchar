import CardFilm1 from "./CardFilm1";
import CardFilm2 from "./CardFilm2";
import CoverFilm from "./CoverFilm";
import DefaultFilm from "./DefaultFilm";

const Home = () => {
  return (
    <div className="w-full h-full pt-[6.1rem] pl-[29.1rem] ">
      <div className="w-full h-full pt-12 pr-16 pb-12 pl-20 space-y-8 overflow-auto">
        <CoverFilm />
        <div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <h2 className="text-xl font-bold">Continue Watching</h2>
              <div className="w-[0.1rem] h-5 mx-6 bg-neutral-500/50"></div>
              <p className="text-sm text-neutral-500">4 Movies</p>
            </div>
            <div className="flex items-center space-x-3 ">
              <p className="text-sm text-neutral-500">All movies</p>
              <p className="text-sm text-neutral-500">{">"}</p>
            </div>
          </div>
          <div className="flex w-full space-x-8 mt-4">
            <CardFilm1 />
            <CardFilm2 />
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">Popular movies 2022</h2>
            <div className="flex items-center space-x-3 ">
              <p className="text-sm text-neutral-500">All movies</p>
              <p className="text-sm text-neutral-500">{">"}</p>
            </div>
          </div>
          <div className="flex w-full space-x-8 mt-4">
            <DefaultFilm />
            <DefaultFilm />
            <DefaultFilm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

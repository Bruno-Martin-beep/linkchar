import { useSelector } from "react-redux";
import { selectPopularList } from "../features/popularSlice";
import PanelCard from "./PanelCard";

const PanelTrailers = () => {
  const popularList = useSelector(selectPopularList);

  return (
    <div className="flex-grow pt-12 px-14 pb-4 space-y-6 overflow-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">New trailers</h2>
        <label className="flex space-x-1">
          <p className="text-base text-neutral-500">Sort By</p>
          <select className="bg-black text-base">
            <option value="today">Today</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="year">Year</option>
          </select>
        </label>
      </div>
      {popularList.length !== 0 &&
        popularList.slice(3, 5).map((movie) => {
          return <PanelCard key={movie.id} movie={movie} />;
        })}
    </div>
  );
};

export default PanelTrailers;

import plus from "../../assets/plus.svg";
import arrowBack from "../../assets/arrow-back.svg";
import PanelTrailers from "./PanelTrailers";

const favGenres: { name: string; color: string }[] = [
  { name: "Action", color: "bg-indigo" },
  { name: "Western", color: "bg-orange" },
  { name: "Adventures", color: "bg-indigo" },
  { name: "Drama", color: "bg-orange" },
  { name: "Sci-Fi", color: "bg-cyan" },
];

const genres: { name: string; color: string }[] = [
  { name: "Crime", color: "bg-cyan" },
  { name: "Comedy", color: "bg-orange" },
  { name: "Thriller", color: "bg-cyan" },
];

const Panel = () => {
  return (
    <div className="flex flex-col absolute top-0 left-0 w-[29rem] h-full border-r-[0.1rem] border-neutral-700/50 pt-[6.1rem] z-0">
      <img
        src={arrowBack}
        className="absolute top-[12.5rem] right-0 translate-x-1/2"
        alt=""
      />
      <PanelTrailers />
      <div className="pt-8 pb-12 px-14 bg-darkgray space-y-6">
        <h2 className="text-xl font-bold">Favourite genres</h2>
        <ul className="flex flex-wrap gap-x-6 gap-y-4">
          {favGenres.map((genre) => (
            <li
              className={`py-1.5 px-3 rounded-full text-xs font-semibold ${genre.color}`}
              key={genre.name}
            >
              {genre.name}
            </li>
          ))}
        </ul>
        <div className="flex space-x-2">
          <img src={plus} alt="" />
          <p className="text-xs font-semibold">Add your favourite genres</p>
        </div>
        <ul className="flex flex-wrap gap-x-4 gap-y-4">
          {genres.map((genre) => (
            <li
              className="py-1.5 px-3 rounded-full text-xs font-semibold bg-neutral-700/50"
              key={genre.name}
            >
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Panel;

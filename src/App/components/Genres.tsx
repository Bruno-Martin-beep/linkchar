import { useDispatch, useSelector } from "react-redux";
import plus from "../../assets/plus.svg";
import { AppDispatch } from "../../store";
import {
  addFavGenre,
  removeFavGenre,
  selectFavGenres,
  selectUnFavGenres,
} from "../features/genresSlice";
import { GenreColor } from "../types";

const Genres = () => {
  const favGenres = useSelector(selectFavGenres);
  const unFavGenres = useSelector(selectUnFavGenres);
  const dispatch = useDispatch<AppDispatch>();

  const handleRemoveFavGenre = (fav: GenreColor) => {
    dispatch(removeFavGenre(fav));
  };

  const handleAddGenre = (genre: GenreColor) => {
    if (favGenres.length < 5) {
      dispatch(addFavGenre(genre));
    }
  };

  return (
    <div className="pt-8 pb-10 px-14 bg-darkgray space-y-6">
      <h2 className="text-xl font-bold">Favourite genres</h2>
      <ul className="flex flex-wrap gap-x-6 gap-y-4 min-h-[1.75rem]">
        {favGenres.map((genre) => (
          <li
            className={`py-1.5 px-3 rounded-full text-xs font-semibold ${genre.color} cursor-pointer`}
            key={genre.name}
            onClick={() => handleRemoveFavGenre(genre)}
          >
            {genre.name}
          </li>
        ))}
      </ul>
      <div className="flex space-x-2">
        <img src={plus} alt="" />
        <p className="text-xs font-semibold">Add your favourite genres</p>
        <p className="text-xs text-neutral-50/50">max 5</p>
      </div>
      <ul className="flex gap-x-4 gap-y-4 pb-2 overflow-auto">
        {unFavGenres.map((genre) => (
          <li
            className="shrink-0 py-1.5 px-3 rounded-full text-xs font-semibold bg-neutral-700/50 cursor-pointer"
            key={genre.name}
            onClick={() => handleAddGenre(genre)}
          >
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Genres;

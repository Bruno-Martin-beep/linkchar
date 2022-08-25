import logo from "../../assets/logo.svg";
import circleIcon from "../../assets/circle-icon.svg";
import circlesIcon from "../../assets/4-circles-icon.svg";
import arrowDown from "../../assets/arrow-down.svg";
import categoryIndicator from "../../assets/category-indicator.svg";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { stateHome } from "../features/pagesSlice";
import Search from "./Search";

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleLogo = () => {
    dispatch(stateHome());
  };

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="flex w-full h-24 bg-black">
        <img
          src={logo}
          className="w-24 mx-16 translate-y-1 cursor-pointer"
          alt="logo"
          onClick={handleLogo}
        />
        <ul className="flex items-center flex-grow gap-20 relative h-full mx-16">
          <img
            src={categoryIndicator}
            className="absolute bottom-0 w-[3.5rem]"
            alt=""
          />
          <li className=" font-bold">Movies</li>
          <li className=" font-bold text-neutral-500">TV shows</li>
          <li className=" font-bold text-neutral-500">Animations</li>
          <li className=" font-bold text-neutral-500">Plans</li>
        </ul>
        <div className="flex items-center space-x-6  mx-16">
          <Search />
          <img src={circleIcon} className="w-6 h-6" alt="circle" />
          <img src={circlesIcon} className="w-5 h-5" alt="4 circles" />
          <div className="flex items-center gap-1">
            <div className="w-7 h-7 bg-neutral-50 rounded-full"></div>
            <img src={arrowDown} alt="user menu" className="w-3 h-3" />
          </div>
        </div>
      </div>
      <div className="w-full h-[0.1rem] bg-gradient-to-r from-neutral-700/10 via-neutral-700 to-neutral-700/10" />
    </div>
  );
};

export default Navbar;

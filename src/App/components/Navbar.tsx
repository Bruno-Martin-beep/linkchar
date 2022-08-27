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
    <>
      <div className="absolute top-0 left-0 w-full h-80 sm:h-24 z-10">
        <div className="flex justify-between w-full h-full bg-black">
          <img
            src={logo}
            className="w-64 sm:w-24 mx-16 translate-y-1 cursor-pointer"
            alt="logo"
            onClick={handleLogo}
          />
          <ul className="hidden sm:flex sm:items-center sm:flex-grow sm:gap-20 relative h-full mx-16">
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
          <div className="flex items-center space-x-14 sm:space-x-6  mx-16">
            <Search />
            <img
              src={circleIcon}
              className="w-20 h-20 sm:w-6 sm:h-6"
              alt="circle"
            />
            <img
              src={circlesIcon}
              className="w-[4.5rem] h-[4.5rem] sm:w-5 sm:h-5"
              alt="4 circles"
            />
            <div className="flex items-center gap-4 sm:gap-1">
              <div className="w-20 h-20 sm:w-7 sm:h-7 bg-neutral-50 rounded-full"></div>
              <img
                src={arrowDown}
                alt="user menu"
                className="w-12 h-12 sm:w-3 sm:h-3"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-1 sm:h-[0.1rem] bg-gradient-to-r from-neutral-700/10 via-neutral-700 to-neutral-700/10" />
      </div>
      <div className="sm:hidden absolute bottom-0 left-0 w-full h-80 z-10 bg-black">
        <div className="w-full h-1 bg-gradient-to-r from-neutral-700/10 via-neutral-700 to-neutral-700/10" />
        <ul className="flex items-center justify-evenly absolute w-full h-full ">
          <img
            src={categoryIndicator}
            className="absolute bottom-0 left-[9.5rem] w-48"
            alt=""
          />
          <li className="text-5xl font-bold">Movies</li>
          <li className="text-5xl font-bold text-neutral-500">TV shows</li>
          <li className="text-5xl font-bold text-neutral-500">Animations</li>
          <li className="text-5xl font-bold text-neutral-500">Plans</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

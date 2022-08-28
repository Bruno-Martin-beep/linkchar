import arrowBack from "../../assets/arrow-back.svg";
import PanelTrailers from "./PanelTrailers";
import Genres from "./Genres";

const Panel = () => {
  return (
    <div className="hidden lg:flex flex-col absolute top-0 left-0 w-[29rem] h-full border-r-[0.1rem] border-neutral-700/50 pt-[6.1rem] z-0">
      <img
        src={arrowBack}
        className="absolute top-[12.5rem] right-0 translate-x-1/2"
        alt=""
      />
      <PanelTrailers />
      <Genres />
    </div>
  );
};

export default Panel;

import playIcon from "../assets/play.svg";
import eye from "../assets/eye.svg";

const PanelCard = () => {
  return (
    <div className="relative w-full aspect-[18/9] rounded-3xl overflow-hidden isolate">
      <div className="flex items-center absolute top-3 right-6 space-x-2 z-10">
        <img src={eye} alt="" />
        <p className="text-xs">2.5 M</p>
      </div>
      <div className="absolute w-full h-full bg-gradient-to-r from-neutral-500 via-neutral-900 to-neutral-500 z-0"></div>
      <div className="flex items-center absolute bottom-0 left-0 w-full h-16 px-6 rounded-xl bg-red-500 z-10">
        <img src={playIcon} className="w-8 h-8 mr-6" alt="" />
        <div className="flex-grow">
          <p className="text-xs font-bold">Title</p>
          <p className="text-xs">Country:</p>
          <p className="text-xs">3h ago</p>
        </div>
        <div className="w-[0.15rem] h-8 bg-gradient-to-b from-neutral-700/10 via-neutral-50 to-neutral-700/10" />
        <p className=" py-1 px-3 rounded-full text-xs font-semibold bg-neutral-50 text-black ml-4">
          01:29
        </p>
      </div>
    </div>
  );
};

export default PanelCard;

import { IoPerson } from "react-icons/io5";
import { ToastContainer } from "react-toastify";

const PlayerCart = ({ player, handleplayerselect }) => {
  const { name, country, image, role, battingType, bowlingType, biddingPrice } =
    player;
  return (
    <div className="player-cart-main shadow-lg hover:shadow-gray-400 rounded-xl  border">
      <div className="p-5  rounded-xl flex flex-col gap-4">
        <img
          className=" md:max-w-[376px] w-[100%] max-h-[206px] object-cover object-top  rounded-xl "
          src={image}
          alt=""
        />
        <div>
          <h3 className="flex gap-2 items-center font-bold text-xl">
            <IoPerson />
            {name}
          </h3>
        </div>
        <div className="flex gap-1 justify-between items-center">
          <h4>{country}</h4>
          <h4>{role}</h4>
        </div>
        <hr />
        <h3 className="font-bold ">Rating</h3>
        <div className="flex gap-1 justify-between items-center ">
          <h4 className="font-bold">{battingType}</h4>
          <h4>{bowlingType}</h4>
        </div>
        <div className="flex justify-between items-center gap-1">
          <h4 className="font-bold">Price: ${biddingPrice}</h4>
          <button
            onClick={() => handleplayerselect(player)}
            className="border py-1 px-4 rounded-lg hover:bg-[#E9EE89] shadow-lg"
          >
            Choose Player <ToastContainer />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCart;

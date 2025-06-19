import { IoPerson } from "react-icons/io5";

const PlayerCart = ({ player, handleplayerselect }) => {
  const { name, country, image, role, battingType, bowlingType, biddingPrice } =
    player;
  return (
    <div className="player-cart-main ">
      <div className="p-5 border rounded-xl flex flex-col gap-4">
        <img className=" max-w-[376px] rounded-xl " src={image} alt="" />
        <div>
          <h3 className="flex gap-2 items-center font-bold">
            <IoPerson />
            {name}
          </h3>
        </div>
        <div className="flex justify-between items-center ">
          <h4>{country}</h4>
          <h4>{role}</h4>
        </div>
        <hr />
        <h3 className="font-bold ">Rating</h3>
        <div className="flex justify-between items-center">
          <h4 className="font-bold">{battingType}</h4>
          <h4>{bowlingType}</h4>
        </div>
        <div className="flex justify-between items-center">
          <h4 className="font-bold">Price: ${biddingPrice}</h4>
          <button
            onClick={() => handleplayerselect(player)}
            className="border py-1 px-4 rounded-lg hover:bg-[#E9EE89]"
          >
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCart;

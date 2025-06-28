import PlayerCart from "../PlayerCart/PlayerCart";
import React, { useEffect, useState } from "react";
import Selected from "../Selected/Selected";
import { Audio } from "react-loader-spinner";
const Players = ({ handleplayerselect, PlayerSelect, handledeleteplayer }) => {
  // // for API fetch
  const [Players, setPlayers] = useState([]);
  const [showSelected, setShowSelected] = useState(true);

  // // for API fetch

  // for loading
  const [loading, setloading] = useState(true);
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
    // data jokhon state a chole ashbe mane  ui te show korbe tokhn loading ta k false kore off kore dibo
    setloading(false);
  }, []);
  // // for API fetch

  return (
    <div className="player-container-wrapper px-5 pb-14">
      {loading && (
        <Audio
          height="280"
          width="280"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      )}

      <div className="md:flex  justify-between items-center mt-20 mb-8 ">
        <h2 className="text-3xl text-black font-bold">
          {showSelected
            ? `Selected Player (${PlayerSelect.length}/6)`
            : "Available Players"}
        </h2>
        <div className="flex sm:mt-5 sticky top-1 bg-white bg-opacity-300 backdrop-blur-md">
          <button
            className={`bg-[#E7FE29] rounded-l-xl py-2 px-5 text-base font-bold ${
              !showSelected ? "border" : "bg-transparent border"
            }`}
            onClick={() => setShowSelected(false)}
          >
            Available
          </button>
          <button
            className={`py-2 px-5 text-base border rounded-r-xl font-bold ${
              showSelected ? "bg-[#E7FE29]" : ""
            }`}
            onClick={() => setShowSelected(true)}
          >
            Selected ({PlayerSelect.length})
          </button>
        </div>
      </div>
      {/* ekhane ternary operator diye "true" hole  <Selected/> components ta show korano holo ekbar & "false" means available button ta >>> <PlayerCart/> components ta show korano holo */}
      {showSelected ? (
        <Selected
          Players={Players}
          PlayerSelect={PlayerSelect}
          handledeleteplayer={handledeleteplayer}
          onBackToSelection={() => setShowSelected(false)}
        />
      ) : (
        <div className="players-cart grid md:grid-cols-3 gap-5">
          {Players.map((player, index) => (
            <PlayerCart
              key={index}
              player={player}
              handleplayerselect={handleplayerselect}
            ></PlayerCart>
          ))}
        </div>
      )}
    </div>
  );
};

export default Players;

import PlayerCart from "../PlayerCart/PlayerCart";
import React, { useEffect, useState } from "react";
const Players = ({ handleplayerselect, PlayerSelect }) => {
  // // for API fetch
  const [Players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  // // for API fetch

  return (
    <div className="player-container-wrapper">
      <div className="flex justify-between items-center mt-20 mb-8">
        <h2 className="text-3xl text-black font-bold">Available Players</h2>
        <div className="flex">
          <button className="bg-[#E7FE29] rounded-l-xl py-2 px-5 text-base	font-bold">
            Available
          </button>
          <button className="py-2 px-5 text-base border rounded-r-xl">
            Selected({PlayerSelect.length})
          </button>
        </div>
      </div>

      <div className="players-cart grid md:grid-cols-3 gap-5">
        {Players.map((player, index) => (
          <PlayerCart
            key={index}
            player={player}
            handleplayerselect={handleplayerselect}
          ></PlayerCart>
        ))}
      </div>
    </div>
  );
};

export default Players;

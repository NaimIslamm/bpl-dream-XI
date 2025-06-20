import "./App.css";
import Header from "./components/header/header";
import Players from "./components/Players/Players";
import Cartlist from "./components/Cartlist/Cartlist";
import { useState } from "react";
import { toast } from "react-toastify";
function App() {
  // for coins claiming
  const [Coins, setCoins] = useState(0);
  const handleClaimCoins = () => {
    alert(setCoins(Coins + 6000000), "Credit added");
  };
  // console.log(Coins);
  // for coins claiming
  // for API fetch
  // const [Players, setPlayers] = useState([]);

  // useEffect(() => {
  //   fetch("players.json")
  //     .then((res) => res.json())
  //     .then((data) => setPlayers(data));
  // }, []);
  // for API fetch

  // choose player
  const [PlayerSelect, setPlayerSelect] = useState([]);

  const handleplayerselect = (player) => {
    // console.log(player, "hi player");
    const isExist = PlayerSelect.find(
      (item) => item.playerId == player.playerId
    );
    const newplayerselect = [...PlayerSelect, player];
    if (!isExist) {
      // 2 ta condition mille player add hbe:
      // this condition for added coins from claim credit otherwise will not choose player
      if (player.biddingPrice < Coins) {
        const remainingBalance = Coins - player.biddingPrice;
        setCoins(remainingBalance);

        // this condition for not added not more than 6 player
        if (newplayerselect.length <= 6) {
          setPlayerSelect(newplayerselect);
        } else {
          toast("Not more than 6");
        }
      } else {
        toast("Not Enough Money");
      }
    } else {
      toast("already added");
    }
  };

  // choose player

  // delete player
  // const handledeleteplayer = (player) => {
  //   console.log(player);
  //   const remainingPlayers = player.filter(
  //     (item) => item.playerId != player.playerId
  //   );

  //   setPlayerSelect(remainingPlayers);
  // };

  const handledeleteplayer = (playerToDelete) => {
    const remainingPlayers = PlayerSelect.filter(
      (item) => item.playerId !== playerToDelete.playerId
    );
    setPlayerSelect(remainingPlayers);
  };
  // delete player

  return (
    <>
      <div className="p-5 max-w-7xl mx-auto">
        <Header Coins={Coins} handleClaimCoins={handleClaimCoins}></Header>
        <Players
          handleplayerselect={handleplayerselect}
          PlayerSelect={PlayerSelect}
        ></Players>
        <Cartlist
          PlayerSelect={PlayerSelect}
          handledeleteplayer={handledeleteplayer}
        ></Cartlist>
      </div>
    </>
  );
}

export default App;

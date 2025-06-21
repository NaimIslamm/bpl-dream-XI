import "./App.css";
import Header from "./components/header/header";
import Players from "./components/Players/Players";
import Cartlist from "./components/Cartlist/Cartlist";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // for coins claiming
  const [Coins, setCoins] = useState(0);
  const handleClaimCoins = () => {
    setCoins(Coins + 6000000);
    toast.success("Succesfully Claimed", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
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
  console.log(PlayerSelect, "hello");
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
          toast.success("Player Added Succesfully", {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else {
          toast.info("Not more than 6", {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      } else {
        toast.warn("Not Enough Money", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } else {
      toast.info("already added", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
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
    if (remainingPlayers) {
      // jei player ta delete korci sai player ta ei function a playerToDelete props hoye asce sei props er (playerToDelete.biddingPrice) diye abr kete newa coins ta add kore dicci
      const remainingBalance = Coins + playerToDelete.biddingPrice;
      setCoins(remainingBalance);
    }
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
          handledeleteplayer={handledeleteplayer}
        ></Players>
        {/* <Cartlist
          PlayerSelect={PlayerSelect}
          handledeleteplayer={handledeleteplayer}
        ></Cartlist> */}
      </div>
      <ToastContainer />
    </>
  );
}

export default App;

import logo from "../../assets/images/logo.png";
import heroImage from "../../assets/images/banner-main.png";
import { AiFillDollarCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Header = ({ Coins, handleClaimCoins }) => {
  const [Menu, setmenu] = useState(false);
  const handleMenuButton = () => {
    console.log(!Menu, "nav");
    setmenu(!Menu, "nav");
  };
  return (
    <div className="header-container relative">
      <div className="flex justify-between items-center mb-10 mx-auto md:sticky top-0 bg-white bg-opacity-300 backdrop-blur-md lg:p-[1rem] px-5">
        <img src={logo} alt="" />
        <span
          onClick={handleMenuButton}
          className="md:hidden text-[30px] border border-yellow-500 hover:border-[#EC5726] p-2"
        >
          {Menu ? <IoMdClose /> : <GiHamburgerMenu />}
        </span>

        <ul
          className={`w-[100%] md:w-auto md:flex md:mr-9 md:static md:bg-transparent absolute  duration-1000 items-center text-base text-[#131313] bg-[#e7fe29] left-0   ${
            Menu ? "top-24" : "-top-80 "
          }`}
        >
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Fixture</a>
          </li>
          <li>
            <a href="">Teams</a>
          </li>
          <li>
            <a href="">Schedules</a>
          </li>
          <li className="border px-5 py-2 md:block lg:block sm:hidden ">
            <a className="flex items-center mt-1 gap-1 font-semibold " href="">
              {Coins} Coin
              <AiFillDollarCircle></AiFillDollarCircle>
            </a>
          </li>
        </ul>
        <a
          className="md:hidden lg:hidden sm:block border px-5 py-2 flex items-center mt-1 gap-1 font-semibold "
          href=""
        >
          {Coins} Coin
          <AiFillDollarCircle></AiFillDollarCircle>
        </a>
      </div>
      <div className="hero-container-wrapper px-5">
        <div
          className="hero-banner
     flex flex-col gap-6 rounded-3xl bg-black min-h-[545px] items-center justify-center px-5 text-center"
        >
          <img
            className="w-[100%] max-w-60  items-center justify-center"
            src={heroImage}
            alt=""
          />
          <h1 className="text-white text-4xl font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-white text-xl">Beyond Boundaries Beyond Limits</p>
          <div className="p-1 border rounded-xl ">
            <button
              onClick={handleClaimCoins}
              className="bg-[#E7FE29] hover:bg-[#E9EE89] rounded-xl py-3 px-4 text-base	font-bold"
            >
              Claim Free Credit
            </button>
          </div>{" "}
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Header;

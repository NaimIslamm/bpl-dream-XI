import logo from "../../assets/images/logo.png";
import heroImage from "../../assets/images/banner-main.png";
import { AiFillDollarCircle } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = ({ Coins, handleClaimCoins }) => {
  return (
    <div className="header-container">
      <div className="flex justify-between items-center mb-10 mx-auto sticky top-0 bg-white bg-opacity-300 backdrop-blur-md lg:p-[3.5rem] h-[3.5rem] mt-5 ">
        <img src={logo} alt="" />
        <ul className="md:flex justify-between gap-8 items-center text-base text-[#131313]">
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
          <li className="border px-5 py-2 ">
            <a className="flex items-center mt-1 gap-1 font-semibold " href="">
              {Coins} Coin
              <AiFillDollarCircle></AiFillDollarCircle>
            </a>
          </li>
        </ul>
      </div>

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
  );
};

export default Header;

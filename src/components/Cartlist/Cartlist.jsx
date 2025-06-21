import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cartlist = ({ PlayerSelect, handledeleteplayer }) => {
  //   const { image, name, role } = PlayerSelect;
  //   console.log(PlayerSelect, "array");
  return (
    <div>
      <div className="flex justify-between items-center mt-20 mb-8">
        <h2 className="text-3xl text-black font-bold">
          Selected Player ({PlayerSelect.length}/6)
        </h2>
        <div className="flex">
          <button className="bg-[#E7FE29] rounded-l-xl py-2 px-5 text-base	font-bold">
            Available
          </button>
          <button className="py-2 px-5 text-base border rounded-r-xl">
            Selected({PlayerSelect.length})
          </button>
        </div>
      </div>
      {PlayerSelect.map((item, index) => (
        <div className="md:flex justify-between gap-6 border px-3 py-4 rounded-xl mb-4">
          <div className="md:flex justify-between items-center gap-6">
            <img
              className="sm:max-w-[200px] md:max-w-[100px] w-[100%] rounded-xl"
              key={index}
              src={item.image}
              alt=""
            />
            <div className="flex flex-col gap-1">
              <h4 className="text-2xl font-bold" key={index}>
                {item.name}
              </h4>
              <h4 key={index}>{item.role}</h4>
            </div>
          </div>
          <button
            onClick={() => handledeleteplayer(item)}
            className="text-[red] text-[20px]"
          >
            <RiDeleteBin6Line />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cartlist;

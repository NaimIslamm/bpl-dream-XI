import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const Selected = ({ PlayerSelect, handledeleteplayer }) => {
  return (
    <div>
      {PlayerSelect.map((item, index) => (
        <div
          key={index}
          className="flex justify-between gap-4 border px-3 py-4 rounded-xl mb-4"
        >
          <div className="flex justify-between items-center gap-6">
            <img
              className="md:max-w-[100px] w-[100%] rounded-xl"
              src={item.image}
              alt=""
            />
            <div className="flex flex-col gap-1">
              <h4 className="text-2xl font-bold">{item.name}</h4>
              <h4>{item.role}</h4>
            </div>
          </div>
          {handledeleteplayer && (
            <button
              onClick={() => handledeleteplayer(item)}
              className="text-[red] text-[20px]"
            >
              <RiDeleteBin6Line />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Selected;

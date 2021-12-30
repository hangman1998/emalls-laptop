import React from "react";
const LaptopCard = ({ laptop, onDelete }) => {
  return (
    <div className="flex flex-row items-center  bg-white border-2 rounded-md ">
      <a href={"http://emalls.ir" + laptop.link}>
        <img src={laptop.imageUrl} alt="" />
      </a>
      <a
        className="hover:text-blue-500  ml-4"
        href={"http://emalls.ir" + laptop.link}
      >
        {laptop.name}
      </a>
      <div className="ml-auto flex-row flex items-center ">
        <div className="text-amber-500 font-bold text-2xl mr-4">
          {laptop.price}
        </div>
        <i
          className="oma oma-delete oma-3x cursor-pointer hover:bg-red-300 rounded-lg"
          onClick={onDelete}
        ></i>
      </div>
    </div>
  );
};

export default LaptopCard;

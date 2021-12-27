import React from "react";
const LaptopCard = ({ laptop, onDelete }) => {
  return (
    <div className="flex flex-col bg-white  shadow-lg rounded-lg  p-4 m-2">
      <h1 className="font-bold text-slate-500 text-4xl">
        #{" " + (laptop.index + 1)}
      </h1>

      <div className="flex flex-row items-center  justify-left mt-2">
        <a href={"http://emalls.ir" + laptop.link}>
          <img
            src={
              laptop.imageUrl.includes("emalls")
                ? laptop.imageUrl
                : laptop.imageUrlLazy
            }
            width={100}
            height={100}
            alt=""
            className="rounded-lg"
          />
        </a>
        <a
          className="hover:text-blue-500 ml-4"
          href={"http://emalls.ir" + laptop.link}
        >
          {laptop.name}
        </a>
        <div className="ml-auto flex-row flex items-center ">
          <div className="text-amber-500 font-bold text-2xl mr-4">
            {laptop.price}
          </div>
          <i
            className="oma oma-delete oma-3x cursor-pointer  "
            onClick={onDelete}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default LaptopCard;

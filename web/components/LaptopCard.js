import React from "react";
const LaptopCard = ({ laptop, onDelete }) => {
  return (
    <div className="flex flex-col bg-white  shadow-lg rounded-lg  p-4 m-2 w-1/2">
      <h1 className="font-bold text-slate-500 text-4xl">
        #{" " + (laptop.index + 1)}
      </h1>

      <div className="flex flex-row items-center justify-between mt-4">
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
        <a
          className="hover:text-blue-500"
          href={"http://emalls.ir" + laptop.link}
        >
          {laptop.name}
        </a>
        <div className="text-amber-500 font-bold text-2xl ml-4">
          {laptop.price}
        </div>
        <button className="cursor-pointer  bg-rose-700" onClick={onDelete}>
          <i className="oma oma-delete oma-3x "></i>
        </button>
      </div>
    </div>
  );
};

export default LaptopCard;

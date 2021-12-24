import React from "react";
const LaptopCard = ({ laptop, index }) => {
  return (
    <div className="flex flex-col bg-white  shadow-lg rounded-lg  p-4 m-2 w-1/2">
      <h1 className="font-bold text-slate-500 text-4xl">
        #{" " + (index + 1)}
      </h1>
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
      <div className="flex flex-row items-center justify-between mt-4">
        <a
          className="hover:text-blue-500"
          href={"http://emalls.ir" + laptop.link}
        >
          {laptop.name}
        </a>
        <div className="text-amber-500 font-bold text-2xl ml-4">
          {laptop.price}
        </div>
      </div>
    </div>
  );
};

export default LaptopCard;

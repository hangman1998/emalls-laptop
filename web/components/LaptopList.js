import React from "react";
import LaptopCard from "./LaptopCard";

const LaptopList = ({ laptops }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-700">
      <h1 className="text-slate-100 text-4xl text-extrabold underline p-2 mb-2">
        Laptops List
      </h1>
      {laptops.map((laptop, index) => (
        <LaptopCard index={index} laptop={laptop} />
      ))}
    </div>
  );
};

export default LaptopList;

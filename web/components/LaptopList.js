import React from "react";
import LaptopCard from "./LaptopCard";

const LaptopList = ({ laptops, setLaptops }) => {
  const deleteHandler = (index) => {
    setLaptops(laptops.filter((x) => x.index != index));
  };
  return (
    <div className="flex flex-col justify-center items-center ">
      {laptops.map((laptop) => (
        <LaptopCard
          laptop={laptop}
          key={laptop.index}
          onDelete={() => deleteHandler(laptop.index)}
        />
      ))}
    </div>
  );
};

export default LaptopList;

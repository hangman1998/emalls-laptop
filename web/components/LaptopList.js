import React from "react";
import LaptopCard from "./LaptopCard";

const LaptopList = ({ laptops, setLaptops, page }) => {
  const deleteHandler = (index) => {
    setLaptops(laptops.filter((x) => x.index != index));
  };
  return (
    <div className=" grid gap-2 grid-cols-4 mx-4 ">
      {laptops.slice(16 * (page - 1), 16 * (page)).map((laptop) => (
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

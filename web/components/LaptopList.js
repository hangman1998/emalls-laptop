import React from "react";
import LaptopCard from "./LaptopCard";

const LaptopList = ({ laptops, setLaptops, page }) => {
  const deleteHandler = (id) => {
    setLaptops(laptops.filter((x) => x.id != id));
  };
  return (
    <div className=" grid grid-cols-4 h-3/5 gap-1 m-2">
      {laptops.slice(16 * (page - 1), 16 * page).map((laptop) => (
        <LaptopCard
          laptop={laptop}
          key={laptop.id}
          onDelete={() => deleteHandler(laptop.id)}
        />
      ))}
    </div>
  );
};

export default LaptopList;

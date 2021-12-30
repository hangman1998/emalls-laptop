import React, { useRef } from "react";

const LaptopFilter = ({ laptops, setLaptops, data, saveChanges }) => {
  const ref = useRef(null);
  const lp = useRef(null);
  const hp = useRef(null);

  const includeFilter = () => {
    setLaptops(
      laptops.filter((laptop) => {
        return !laptop.name
          .toLowerCase()
          .includes(ref.current.value.toLowerCase());
      })
    );
  };
  const priceFilter = () => {
    setLaptops(
      laptops.filter(
        (laptop) =>
          laptop.price <= hp.current.value && laptop.price >= lp.current.value
      )
    );
  };
  return (
    <div className="bg-slate-200 p-4 rounded-lg">
      <div className="text-rose-500 text-lg font-bold underline">
        Items Count {laptops.length}
      </div>
      <div>
        <span>delete laptops that contain </span>
        <input type="text" ref={ref}></input>
        <button
          onClick={includeFilter}
          className="rounded-md bg-lime-500 text-lime-50 text-bg font-bold px-2 py-1 ml-4 hover:bg-lime-600"
        >
          apply
        </button>
      </div>
      <div className="mt-2">
        <span>show only in price range of: from </span>
        <input type="number" ref={lp} defaultValue={0}></input>
        <span>to</span>
        <input type="number" ref={hp} defaultValue={200}></input>
        <button
          onClick={priceFilter}
          className="rounded-md bg-lime-500 text-lime-50 text-bg font-bold px-2 py-1 ml-4 hover:bg-lime-600"
        >
          apply
        </button>
      </div>
      <div className="flex flex-row mt-2 items-center justify-center">
        <button
          onClick={() => {
            setLaptops(data);
          }}
          className="rounded-md bg-slate-400 text-slate-50 text-bg font-bold px-2 py-1 ml-4 hover:bg-slate-500"
        >
          reset
        </button>
        <button
          onClick={saveChanges}
          className="rounded-md bg-orange-400 text-slate-50 text-bg font-bold px-2 py-1 ml-4 hover:bg-orange-500"
        >
          save
        </button>
      </div>
    </div>
  );
};

export default LaptopFilter;

import React, { useRef } from "react";

const LaptopFilter = ({ laptops, setLaptops, data, saveChanges }) => {
  const ref = useRef(null);
  return (
    <div className="bg-slate-200 p-4 rounded-lg">
      <div className="text-rose-500 text-lg font-bold underline">
        Items Count {laptops.length}
      </div>
      <span>delete laptops that contain </span>
      <input type="text" ref={ref}></input>
      <button
        onClick={() => {
          setLaptops(
            laptops.filter((laptop) => {
              return !laptop.name
                .toLowerCase()
                .includes(ref.current.value.toLowerCase());
            })
          );
        }}
        className="rounded-md bg-lime-500 text-lime-50 text-bg font-bold px-2 py-1 ml-4 hover:bg-lime-600"
      >
        apply
      </button>
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
  );
};

export default LaptopFilter;

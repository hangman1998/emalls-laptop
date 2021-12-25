import React, { useEffect, useState } from "react";
import useSWR from "swr";
import LaptopFilter from "../components/LaptopFilter";
import LaptopList from "../components/LaptopList";
import axios from "axios";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Index() {
  const { data, error, mutate } = useSWR(
    "http://localhost:3001/laptops",
    fetcher
  );

  const [laptops, setLaptops] = useState([]);
  useEffect(() => setLaptops(data), [data]);
  const saveChanges = () => {
    axios
      .post("http://localhost:3001/laptops", JSON.stringify(laptops), {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        mutate("http://localhost:3001/laptops");
      })
      .catch((err) => console.error(err));
  };
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  if (!laptops) return <div>loading...???</div>;

  return (
    <div className="bg-slate-700 flex flex-col justify-center items-center">
      <h1 className="text-slate-100 text-4xl text-extrabold underline p-2 mb-2">
        Laptops List
      </h1>
      <LaptopFilter
        laptops={laptops}
        setLaptops={setLaptops}
        data={data}
        saveChanges={saveChanges}
      />
      <LaptopList
        laptops={laptops}
        setLaptops={setLaptops}
        saveChanges={saveChanges}
      />
    </div>
  );
}

export default Index;

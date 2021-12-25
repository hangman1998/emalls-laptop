import React, { useEffect, useState } from "react";
import useSWR from "swr";
import LaptopFilter from "../components/LaptopFilter";
import LaptopList from "../components/LaptopList";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Index() {
  const { data, error } = useSWR("http://localhost:3001/laptops", fetcher);
  const [laptops, setLaptops] = useState([]);
  useEffect(() => setLaptops(data), [data]);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  if (!laptops) return <div>loading...???</div>;

  return (
    <div className="bg-slate-700 flex flex-col justify-center items-center">
      <h1 className="text-slate-100 text-4xl text-extrabold underline p-2 mb-2">
        Laptops List
      </h1>
      <LaptopFilter laptops={laptops} setLaptops={setLaptops} data={data} />
      <LaptopList laptops={laptops} setLaptops={setLaptops} />
    </div>
  );
}

export default Index;

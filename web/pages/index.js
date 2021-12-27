import React, { useEffect, useState } from "react";
import useSWR from "swr";
import LaptopFilter from "../components/LaptopFilter";
import LaptopList from "../components/LaptopList";
import axios from "axios";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Index() {
  const [page, setPage] = useState(1);
  const { data, error, mutate } = useSWR(
    `http://localhost:3001/laptops`,
    fetcher
  );

  const [laptops, setLaptops] = useState([]);
  useEffect(() => { if (data) setLaptops(data) }, [data]);
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

  return (
    <div className="bg-slate-700 flex flex-col items-center h-screen">
      <h1 className="text-slate-100 text-4xl text-extrabold underline p-2 mb-2">
        Laptops List
      </h1>
      <LaptopFilter
        laptops={laptops}
        setLaptops={setLaptops}
        data={data}
        saveChanges={saveChanges}
      />
      <div className="flex flex-row my-2 ">
        <button
          onClick={() => setPage(page === 1 ? 1 : page - 1)}
          className="rounded-md bg-sky-300 text-sky-900 text-xl font-bold  px-2 py-1 ml-4 hover:bg-sky-400"
        >
          prev
        </button>
        <button
          onClick={() => setPage(page + 1)}
          className="rounded-md bg-sky-500 text-sky-900 text-xl font-bold  px-2 py-1 ml-4 hover:bg-sky-600"
        >
          next
        </button>
      </div>
      <LaptopList
        laptops={laptops}
        page={page}
        setLaptops={setLaptops}
        saveChanges={saveChanges}
      />
    </div>
  );
}

export default Index;

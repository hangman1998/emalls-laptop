import React, { useEffect, useState } from "react";
import LaptopFilter from "../components/LaptopFilter";
import LaptopList from "../components/LaptopList";
import axios from "axios";
import LittlePages from "../components/LittlePages";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Index() {
  const [page, setPage] = useState(1);
  const [scrapeDate, setScrapeDate] = useState(null);
  const [scrapeStatus, setScrapeStatus] = useState(false);
  const [data, setData] = useState([]);
  const [laptops, setLaptops] = useState([]);
  useEffect(() => {
    axios.get("api/laptops").then((res) => {
      setData(res.data);
      setLaptops(res.data);
    });
  }, []);

  const saveChanges = async () => {
    setData(laptops);
    await axios.post("/api/laptops", laptops);
  };
  return (
    <div className="bg-slate-100 flex flex-col items-center h-screen">
      <h1 className="text-slate-700 text-4xl text-extrabold underline p-2 mb-2">
        Laptops List
      </h1>
      <div className="flex flex-row items-center mb-2">
        <p>last scrape date: {scrapeDate?.toLocaleString() || "never"}</p>
        <button
          onClick={() => {
            setScrapeStatus(true);
            axios.get("/api/scrape").then(() => {
              setScrapeDate(Date.now());
              setScrapeStatus(false);
            });
          }}
          className="flex flex-row rounded-md bg-violet-500 text-violet-900 text-xl font-bold  px-2 py-1 ml-4 hover:bg-violet-600"
        >
          {scrapeStatus ? <img className="animate-spin " src="spin.svg" /> : ""}
          Scrape
        </button>
      </div>
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
          onClick={() =>
            setPage(
              page + 1 <= Math.ceil(laptops.length / 16) ? page + 1 : page
            )
          }
          className="rounded-md bg-sky-500 text-sky-900 text-xl font-bold  px-2 py-1 ml-4 hover:bg-sky-600"
        >
          next
        </button>
      </div>
      <LittlePages
        page={page}
        totalPages={Math.ceil(laptops.length / 16)}
        setPage={setPage}
      />
      <LaptopList
        laptops={laptops}
        page={page}
        setLaptops={setLaptops}
        setPage={setPage}
      />
    </div>
  );
}

export default Index;

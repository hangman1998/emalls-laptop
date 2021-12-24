import React from "react";
import useSWR from "swr";
import LaptopList from "../components/LaptopList";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Index() {
  const { data, error } = useSWR("http://localhost:3001/laptops", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // render data
  return <LaptopList laptops={data} />;
}

export default Index;

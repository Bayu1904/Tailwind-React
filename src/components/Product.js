import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import { useQuery } from "react-query";
import { API } from "../config/api";

import foto from "../Assets/img/HP/G5-Elite-1.jpg";
import foto2 from "../Assets/img/HP/G5-Elite-2.jpg";

import "aos/dist/aos.css";
import CardProduct from "./Card-Product";

export default function Product() {
  let { data: products } = useQuery("productsCache", async () => {
    const response = await API.get("/Merk");
    return response.data;
  });

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [img, setImg] = useState(false);
  const handleShownImg = () => {
    setImg(!img);
  };
  return (
    <div className="w-3/4 m-auto grid xl:grid-cols-3 grid-cols-1 gap-3 h-auto mt-8">
      <div className=" px-12 py-4 hidden md:block">
        <h1 className="border-b-2 border-slate-300 pb-3 font-lg mb-5">
          Categories
        </h1>
        <ul className="flex flex-col">
          <li className="mb-4  font-thin text-gray-500 hover:text-gray-900 cursor-pointer">
            Lainnya
          </li>
          <li className="mb-4  font-thin text-gray-500 hover:text-gray-900 cursor-pointer">
            Smartphone
          </li>
          <li className=" font-thin text-gray-500 hover:text-gray-900 cursor-pointer">
            Tablet
          </li>
        </ul>
      </div>

      <div className="col-span-2 py-4 grid md:grid-cols-3 grid-cols-1 gap-5 h-auto">
        {products?.map((item, index) => (
          <CardProduct item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

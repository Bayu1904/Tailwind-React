import React, { useState } from "react";
import foto from "../Assets/img/HP/G5-Elite-1.jpg";
import foto2 from "../Assets/img/HP/G5-Elite-2.jpg";

export default function Product() {
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
        <div
          className="h-96 text-center cursor-pointer transition-all duration-500 relative"
          onMouseEnter={handleShownImg}
          onMouseOut={handleShownImg}
        >
          <div className="bg-red-700 text-white text-xs font-normal absolute py-3 px-2 top-4 left-4 rounded-full">
            SALE
          </div>
          {img ? (
            <img src={foto} alt="" className="w-full inline" />
          ) : (
            <img src={foto2} alt="" className="w-full inline" />
          )}
          <p className="font-thin mt-4"> Smartphone</p>
          <p className="font-bold"> Advan Smartphone G5 Elite 3/16GB</p>
          <p className="font-light text-red-500"> Rp. 985.000</p>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import foto from "../Assets/img/HP/G5-Elite-1.jpg";
import foto2 from "../Assets/img/HP/G5-Elite-2.jpg";

export default function CardProduct() {
  const [img, setImg] = useState(false);
  const handleShownImg = () => {
    setImg(!img);
  };
  return (
    <div className="w-full h-auto">
      <div
        className=" text-center cursor-pointer transition-all duration-500 relative"
        onMouseEnter={handleShownImg}
        onMouseOut={handleShownImg}
      >
        <div className="bg-red-700 text-white text-xs font-normal absolute py-3 px-2 top-4 left-4 rounded-full">
          SALE
        </div>
        {img ? (
          <img src={foto2} alt="" className="w-full inline h-full" />
        ) : (
          <img src={foto} alt="" className="w-full inline h-auto" />
        )}
        <p className="font-thin mt-4 text-base"> Smartphone</p>
        <p className="font-bold text-base"> Advan Smartphone G5 Elite 3/16GB</p>
        <p className="font-light text-red-500 text-base"> Rp. 985.000</p>
      </div>
    </div>
  );
}

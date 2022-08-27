import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";

import "aos/dist/aos.css";

export default function CardProduct(props) {
  const numberFormat = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [img, setImg] = useState(false);
  const handleShownImg = () => {
    setImg(!img);
  };
  return (
    <Link to={"/Detail/" + props.item._id}>
      <div className="w-full h-auto">
        <div
          data-aos="fade-up"
          className=" text-center cursor-pointer transition-all duration-500 relative"
          onMouseEnter={handleShownImg}
          onMouseOut={handleShownImg}
        >
          <div className="bg-red-700 text-white text-xs font-normal absolute py-3 px-2 top-4 left-4 rounded-full">
            SALE
          </div>
          {img ? (
            <img
              src={props.item.image1[0].url}
              alt=""
              className="w-full inline h-full"
            />
          ) : (
            <img
              src={props.item.image2[0].url}
              alt=""
              className="w-full inline h-auto"
            />
          )}
          <p className="font-thin mt-4 text-base"> Smartphone</p>
          <p className="font-bold text-base"> {props.item.title}</p>
          <p className="font-light text-red-500 text-base">
            {" "}
            {numberFormat(props.item.price)}
          </p>
        </div>
      </div>
    </Link>
  );
}

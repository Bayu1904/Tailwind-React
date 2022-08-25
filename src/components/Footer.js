import React from "react";
import Advan from "../Assets/img/Advan.png";

export default function Footer() {
  return (
    <div className=" w-5/6 flex m-auto h-24">
      <div className="flex-1">
        <img src={Advan} alt="" className="w-24" />
      </div>
      <div className="flex-1 grid grid-rows-2">
        <div></div>
      </div>
      <div className="flex-1"></div>
    </div>
  );
}

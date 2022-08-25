import React from "react";
import Smartphone from "../Assets/img/banner.jpg";
import Tablet from "../Assets/img/Banner-1.jpg";
import Lainnya from "../Assets/img/banner-2.jpg";

export default function Navbar() {
  return (
    <div className="container mx-auto p-5" style={{ width: "75%" }}>
      <div className="m-auto grid grid-cols-1 xl:grid-cols-3 gap-1 xl:gap-4 h-48">
        <div class="w-full text-center h-40 sm:h-56 overflow-hidden">
          <img
            src={Smartphone}
            alt=""
            className="object-contain hover:scale-110 ease-linear duration-300 inline"
          />
          <div className="-mt-32 relative">
            <a
              href=""
              className="bg-slate-100 z-10 mt-6 py-3 px-5 hover:bg-pink-700 hover:text-white text-xs ease-in duration-300"
            >
              SMARTPHONE
            </a>
          </div>
        </div>
        <div class="w-full text-center h-40 sm:h-56 overflow-hidden">
          <img
            src={Tablet}
            alt=""
            className="object-contain hover:scale-110 ease-linear duration-300 inline"
          />
          <div className="-mt-32 relative">
            <a
              href=""
              className="bg-slate-100 z-10 mt-6 py-3 px-5 hover:bg-pink-700 hover:text-white text-xs ease-in duration-300"
            >
              TABLET
            </a>
          </div>
        </div>
        <div class="w-full text-center h-40 sm:h-56 overflow-hidden">
          <img
            src={Lainnya}
            alt=""
            className="object-contain hover:scale-110 ease-linear duration-300 inline"
          />
          <div className="-mt-32 relative">
            <a
              href=""
              className="bg-slate-100 z-10 mt-6 py-3 px-5 hover:bg-pink-700 hover:text-white text-xs ease-in duration-300"
            >
              LAINNYA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

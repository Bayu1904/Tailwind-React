import React from "react";
import Foto1 from "../Assets/img/1.jpg";
import Foto2 from "../Assets/img/2.jpg";
import Foto3 from "../Assets/img/3.jpg";

export default function DetailProduct() {
  return (
    <div className="container mt-80 xl:mt-44">
      <div className="xl:text-2xl md:text-lg uppercase font-bold bg-gray-200 mb-12 text-center">
        <hr className="border-1 w-20 border-slate-400 inline-block mb-2" />
        <p className="inline xl:mx-14 mx-5">koleksi produk</p>
        <hr className="border-1 w-20 border-slate-400 inline-block mb-2" />
      </div>
      <div>
        <div className="w-3/4 m-auto grid xl:grid-cols-3 grid-cols-1 gap-3 h-conten">
          <div className="row-span-2  w-full md:h-conten h-96 overflow-hidden">
            <img
              src={Foto1}
              alt=""
              className="object-contain hover:scale-110 ease-linear duration-300 inline"
            />
          </div>
          <div className=" w-full md:h-64 h-52  overflow-hidden">
            <img
              src={Foto2}
              alt=""
              className="object-contain hover:scale-110 ease-linear duration-300 inline"
            />
          </div>
          <div className="row-span-2  w-full md:h-conten h-96  overflow-hidden">
            <img
              src={Foto3}
              alt=""
              className="object-contain hover:scale-110 ease-linear duration-300 inline"
            />
          </div>
          <div className="  w-full md:h-64 h-52 overflow-hidden ">
            <img
              src={Foto2}
              alt=""
              className="object-contain hover:scale-110 ease-linear duration-300 inline"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Advan from "../Assets/img/Advan.png";
import { BsInstagram, BsTwitter, BsYoutube, BsFacebook } from "react-icons/bs";
import { IconContext } from "react-icons";

export default function Footer() {
  return (
    <div className=" w-5/6 grid xl:grid-cols-3 grid-cols-1 gap-3 m-auto h-24 mt-pages1 md:mt-80">
      <div>
        <img src={Advan} alt="" className="w-24 m-auto md:m-0" />
      </div>
      <div className=" grid grid-rows-2 text-center">
        <div className="mb-0 h-4">
          <span>Produk</span>
          <span className="mx-10">Galeri</span>
          <span>Toko Resmi</span>
        </div>
        <div className="font-thin text-gray-600">
          Copyright 2022 &copy; PT Bangga Teknologi Indonesia
        </div>
      </div>
      <div className="flex justify-evenly bg-gray-200 w-full">
        <BsFacebook fontSize="1.5em" />
        <BsInstagram fontSize="1.5em" />
        <BsTwitter fontSize="1.5em" />
        <BsYoutube fontSize="1.5em" />
      </div>
    </div>
  );
}

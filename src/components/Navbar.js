import React, { useState } from "react";
import Logo from ".././Assets/img/Advan.png";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleShownav = () => {
    setNav(!nav);
  };
  return (
    <nav className="py-4 px-5  sticky top-0 z-10 bg-white flex justify-between md:justify-center">
      <div className="flex justify-center">
        <ul className="m-auto hidden md:flex justify-center">
          <li className="inline mr-4 ">Product</li>
          <li className="inline mr-4">Galeri</li>
          <li className="inline mr-4">Toko Resmi</li>
        </ul>
        <a href="#">
          <img className="inline w-28" src={Logo} alt="" />
        </a>
        <ul className="hidden md:flex justify-center">
          <li className="inline ml-4 ">Dukungan</li>
          <li className="inline ml-4">Kontak Kami</li>
          <li className="inline ml-4">Berita & cerita</li>
        </ul>
      </div>
      {/* Dropdown Burger menu */}
      <div onClick={handleShownav} className=" md:hidden flex z-10">
        {!nav ? <GiHamburgerMenu size={30} /> : <AiOutlineClose size={30} />}
      </div>
      {/* Menus Dropdown */}
      <div
        className={
          nav
            ? "absolute right-0 top-0 w-64 h-screen px-8 pt-3 opacity-90 flex flex-col bg-slate-400 ease-in duration-300"
            : "absolute right-[100%] top-0 w-64 h-screen px-8 pt-3 opacity-90 flex flex-col bg-slate-400 ease-in duration-300"
        }
      >
        <ul>
          <a href="#">
            <img className=" w-28 mb-7" src={Logo} alt="" />
          </a>
          <li className="">Product</li>
          <li className="">Galeri</li>
          <li className="">Toko Resmi</li>
          <li className="">Dukungan</li>
          <li className="">Kontak Kami</li>
          <li className="">Berita & cerita</li>
        </ul>
      </div>
      {/* End Menus */}
    </nav>
  );
}

import React from "react";
import Logo from ".././Assets/img/Advan.png";

export default function Navbar() {
  return (
    <nav className="py-4 sticky top-0 z-10 bg-white">
      <div className="flex justify-center">
        <div>
          <ul className="m-auto flex justify-center">
            <li className="inline mr-4 ">Product</li>
            <li className="inline mr-4">Galeri</li>
            <li className="inline mr-4">Toko Resmi</li>
          </ul>
        </div>
        <a href="#">
          <img className="inline w-28" src={Logo} alt="" />
        </a>
        <div>
          <ul>
            <li className="inline ml-4 ">Dukungan</li>
            <li className="inline ml-4">Kontak Kami</li>
            <li className="inline ml-4">Berita & cerita</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

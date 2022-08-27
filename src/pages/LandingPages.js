import React, { useState } from "react";

// Components
import Navbar from "../components/Navbar";
import Product from "../components/ProductCategories";
import Jumbotron from "../components/Jumbotron";
import DetailProduct from "../components/DetailProduct";
import OfficialStore from "../components/OfficialStore";
import News from "../components/News";
import Footer from "../components/Footer";

export default function LandingPages() {
  const [chat, setChat] = useState(false);
  const handleShowChat = () => {
    setChat(!chat);
  };
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Product />
      <DetailProduct />
      <OfficialStore />
      <News />
      <div
        className={
          chat
            ? "bg-white fixed hidden md:inline bottom-0 right-16 cursor-pointer rounded-t-xl w-56 ease-in duration-300"
            : "bg-white fixed hidden md:inline -bottom-60 right-16 cursor-pointer rounded-t-xl w-56 ease-in duration-300"
        }
      >
        <div
          onClick={handleShowChat}
          className=" rounded-t-xl w-full bg-red-600 px-8 py-3 text-white"
        >
          Chat
        </div>
        <div className="mt-5 text-center">
          <input type="text" placeholder="Masukan nama" className="p-1 mb-4" />
          <input type="text" placeholder="Masukan email" className="p-1 mb-4" />
          <textarea
            placeholder="Masukan Pesan"
            className="p-1 mb-4 border-black"
          />
          <button className="bg-red-600 text-white rounded-xl py-1 px-5 mb-3">
            SUMBIT
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

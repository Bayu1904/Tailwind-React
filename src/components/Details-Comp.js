import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Carousel } from "flowbite-react/lib/esm/components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

import Card from "../components/Card-Product";
import Spek from "../components/Spek";
import foto from "../Assets/img/HP/G5-Elite-1.jpg";
import foto2 from "../Assets/img/HP/G5-Elite-2.jpg";
import Tokopedia from "../Assets/img/e-com/tokopedia.png";
import Shopee from "../Assets/img/e-com/shopee.png";
import JD from "../Assets/img/e-com/jd.png";
import Bukalapak from "../Assets/img/e-com/bukalapak.png";
import Blibli from "../Assets/img/e-com/blilbli.png";
import Lazada from "../Assets/img/e-com/lazada.png";

export default function DetailComp() {
  return (
    <div className="md:mb-0 -mb-pages2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-3/4 m-auto my-3">
        <div className="w-full h-conten">
          <Carousel className="h-96" slideInterval={10000}>
            <div className="relative">
              <div className="bg-red-700 text-white text-xs font-normal absolute py-3 px-2 top-4 left-20 rounded-full">
                SALE
              </div>
              <img src={foto} alt="Banner-1" className="m-auto" />
            </div>
            <div className="relative">
              <div className="bg-red-700 text-white text-xs font-normal absolute py-3 px-2 top-4 left-20 rounded-full">
                SALE
              </div>
              <img src={foto2} alt="Banner-1" className="m-auto" />
            </div>
          </Carousel>
        </div>
        <div className="p-6 overflow-auto">
          <h1 className="text-3xl font-semibold">
            Advan SmartPhone G5 Elite 3/16
          </h1>
          <div className="text-xl py-2 font-light text-red-600">Rp 984.000</div>
          <p className="text-lg mb-10">
            di seluruh pelosok Indonesia, kini Advan menghadirkan G5 Elite
            dengan RAM 3 GB dan internal 16 GB didukung baterai 3000 mAh dan
            quadcore 1.4 GHz untuk mendukung performa Anda di mana saja. Nikmati
            tampilan menawan dari layar HD+ dengan IPS 2.5D glass yang kokoh dan
            kamera 5MP yang dilengkapi flash light.
          </p>
          <div className="grid grid-cols-3 w-56 gap-6 mb-12">
            <div>
              <img src={Tokopedia} alt="" />
            </div>
            <div>
              <img src={JD} alt="" />
            </div>
            <div>
              <img src={Shopee} alt="" />
            </div>
            <div>
              <img src={Bukalapak} alt="" />
            </div>
            <div>
              <img src={Blibli} alt="" />
            </div>
            <div>
              <img src={Lazada} alt="" />
            </div>
          </div>
          <div>Category : Handphone</div>
          <div>Tag : G5-Lite</div>
        </div>
      </div>
      <div>
        <Spek />
      </div>
      <div className="xl:text-2xl md:text-lg uppercase font-bold bg-gray-200 text-center">
        <hr className="border-1 w-20 border-slate-400 inline-block mb-2" />
        <p className="inline xl:mx-14 mx-5">related Product</p>
        <hr className="border-1 w-20 border-slate-400 inline-block mb-2" />
      </div>
      <div className="w-full md:w-2/4 m-auto -mb-36 md:mt-14 mt-3">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

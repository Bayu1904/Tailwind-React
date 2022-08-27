import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { API } from "../config/api";
import { useParams } from "react-router-dom";
import Aos from "aos";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Carousel } from "flowbite-react/lib/esm/components";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "aos/dist/aos.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Card from "../components/Card-Product";
import Spek from "../components/Spek";
import Tokopedia from "../Assets/img/e-com/tokopedia.png";
import Shopee from "../Assets/img/e-com/shopee.png";
import JD from "../Assets/img/e-com/jd.png";
import Bukalapak from "../Assets/img/e-com/bukalapak.png";
import Blibli from "../Assets/img/e-com/blilbli.png";
import Lazada from "../Assets/img/e-com/lazada.png";

export default function DetailComp() {
  const numberFormat = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);

  let { id } = useParams();
  let { data: products } = useQuery("productsCache", async () => {
    const response = await API.get("/Merk");
    return response.data;
  });

  let { data: product } = useQuery("productCache", async () => {
    const response = await API.get("/Merk/" + id);
    return response.data;
  });

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="md:mb-0 -mb-pages2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-3/4 m-auto my-3">
        <div className="w-full h-conten">
          <Carousel className="h-96" slideInterval={10000}>
            <div className="relative">
              <div className="bg-red-700 z-10 text-white text-xs font-normal absolute py-3 px-2 top-4 left-20 rounded-full">
                SALE
              </div>
              <img
                data-aos="fade-up"
                src={product?.image1[0]?.url}
                alt="Banner-1"
                className="m-auto"
              />
            </div>
            <div className="relative">
              <div className="bg-red-700 text-white text-xs font-normal absolute py-3 px-2 top-4 left-20 rounded-full">
                SALE
              </div>
              <img
                src={product?.image2[0]?.url}
                alt="Banner-1"
                className="m-auto"
              />
            </div>
          </Carousel>
        </div>
        <div className="p-6 overflow-auto">
          <h1 className="text-3xl font-semibold">{product?.title}</h1>
          <div className="text-xl py-2 font-light text-red-600">
            {numberFormat(product?.price)}
          </div>
          <p className="text-lg mb-10">{product?.desc}</p>
          <div data-aos="fade-up" className="grid grid-cols-3 w-56 gap-6 mb-12">
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
          {products?.map((item, index) => (
            <SwiperSlide>
              <Card item={item} key={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

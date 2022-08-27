import React, { useEffect } from "react";
import Aos from "aos";

import Tokopedia from "../Assets/img/e-com/tokopedia.png";
import Shopee from "../Assets/img/e-com/shopee.png";
import JD from "../Assets/img/e-com/jd.png";
import Bukalapak from "../Assets/img/e-com/bukalapak.png";
import Blibli from "../Assets/img/e-com/blilbli.png";
import Lazada from "../Assets/img/e-com/lazada.png";

import "aos/dist/aos.css";

export default function OfficialStore() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="container mt-pages md:mt-32">
      <div className="xl:text-2xl md:text-lg uppercase font-bold bg-gray-200 mb-12 text-center">
        <hr className="border-1 w-20 border-slate-400 inline-block mb-2" />
        <p className="inline xl:mx-14 mx-5">official Store</p>
        <hr className="border-1 w-20 border-slate-400 inline-block mb-2" />
      </div>
      <div
        data-aos="fade-up"
        className="w-3/4 m-auto grid xl:grid-cols-6 grid-cols-2 gap-3 h-48"
      >
        <div className="w-full text-center">
          <label htmlFor="">
            <img src={Tokopedia} alt="" className="m-auto" />
            <p className="mt-7">Tokopedia</p>
          </label>
        </div>
        <div className="w-full text-center">
          <label htmlFor="">
            <img src={Shopee} alt="" className="m-auto" />
            <p className="mt-7">Shopee</p>
          </label>
        </div>
        <div className="w-full text-center">
          <label htmlFor="">
            <img src={JD} alt="" className="m-auto" />
            <p className="mt-7">JD.ID</p>
          </label>
        </div>
        <div className="w-full text-center">
          <label htmlFor="">
            <img src={Bukalapak} alt="" className="m-auto" />
            <p className="mt-7">Bukalapak</p>
          </label>
        </div>
        <div className="w-full text-center">
          <label htmlFor="">
            <img src={Blibli} alt="" className="m-auto" />
            <p className="mt-7">Blibli</p>
          </label>
        </div>
        <div className="w-full text-center">
          <label htmlFor="">
            <img src={Lazada} alt="" className="m-auto" />
            <p className="mt-7">Lazada</p>
          </label>
        </div>
      </div>
    </div>
  );
}

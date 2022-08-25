import React from "react";

export default function News() {
  return (
    <div className="container mt-72 md:mt-32">
      <div className="xl:text-2xl md:text-lg uppercase font-bold bg-gray-200 mb-12 text-center">
        <hr className="border-1 w-20 border-slate-400 inline-block mb-2" />
        <p className="inline xl:mx-14 mx-5">berita Terkini</p>
        <hr className="border-1 w-20 border-slate-400 inline-block mb-2" />
      </div>
      <div className="w-3/4 m-auto grid xl:grid-cols-3 grid-cols-1 gap-3 h-48">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

import React from "react";

export default function Spek() {
  return (
    <div className="w-3/4 m-auto mb-10">
      <div className="text-center border-b-gray-300 border-b-2 underline-offset-3 font-thin text-md text-red-600 uppercase">
        <div className=" border-b-red-500 border-b-2 underline-offset-3 w-28 m-auto">
          Spesifikasi
        </div>
      </div>
      <h1 className="pt-3 font-semibold text-2xl ">Spesifikasi</h1>
      <p className="pt-2 pb-8 text-gray-500">IMEI Terdaftar resmi</p>
      <table className="w-full table-auto m-auto">
        <tr className="w-full mb-5 ">
          <td className="py-3 text-gray-500 pr-9">OS</td>
          <td className="text-gray-500 py-3">: 120910291202</td>
        </tr>
        <tr className="w-full mb-5 ">
          <td className="py-3 text-gray-500 pr-9">OS</td>
          <td className="text-gray-500 py-3">: 120910291202</td>
        </tr>
        <tr className="w-full mb-5 ">
          <td className="py-3 text-gray-500 pr-9">OS</td>
          <td className="text-gray-500 py-3">: 120910291202</td>
        </tr>
      </table>
    </div>
  );
}

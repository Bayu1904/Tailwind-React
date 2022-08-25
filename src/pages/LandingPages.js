import React from "react";

// Components
import Navbar from "../components/Navbar";
import Product from "../components/ProductCategories";
import Jumbotron from "../components/Jumbotron";
import DetailProduct from "../components/DetailProduct";
import OfficialStore from "../components/OfficialStore";
import News from "../components/News";
import Footer from "../components/Footer";

export default function LandingPages() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Product />
      <DetailProduct />
      <OfficialStore />
      <News />
      <Footer />
    </div>
  );
}

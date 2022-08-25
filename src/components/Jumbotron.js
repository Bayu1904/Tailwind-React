import React from "react";
import { Carousel } from "flowbite-react";

import Brand from "../Assets/img/Brand-1.PNG";
import Brand2 from "../Assets/img/Brand-2.PNG";

export default function Jumbotron() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel className="h-96" slideInterval={8000}>
        <img src={Brand} alt="Banner-1" />
        <img src={Brand2} alt="Banner" />
        <img src={Brand} alt="Banner-2" />
      </Carousel>
    </div>
  );
}

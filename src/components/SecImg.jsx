import React from "react";
import { chocomess } from "../assets";
import { style } from "../styles";
const SecImg = () => {
  return (
    <section className={`mx-5 mt-10 mb-28 `}>
      <h1
        className={`text-[20px] ${style.heading} font-semibold text-center text-primary`}
      >
        Looking for Chocolate? <br />
        We've got you Covered!
      </h1>
      <img src={chocomess} alt="" className="relative" />
    </section>
  );
};

export default SecImg;

import React from "react";
import { chocomess } from "../assets";
import { style } from "../styles";
const SecImg = () => {
  return (
    <section className={`mx-10 mt-20 mb-28 relative `}>
      <img src={chocomess} alt="" />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.3]" />
      <div className="absolute top-0 left-0 w-full h-full z-10 text-white flex items-center justify-center text-center">
        <h1 className="text-[50px] ">
          Looking for Chocolate? <br />
          We've got you Covered.
        </h1>
      </div>
    </section>
  );
};

export default SecImg;

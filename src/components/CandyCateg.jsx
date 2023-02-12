import React from "react";
import { categories2 } from "../constants";
import { style } from "../styles";

const CandyCateg = () => {
  return (
    <section
      className={`${style.paddingX} ${style.paddingY} flex flex-col text-center`}
    >
      <h1 className={`${style.heading} text-primary font-bold `}>
        Shop Top Categories
      </h1>
      <div className="grid place-items-center ss:grid-cols-3 md:grid-cols-5 lg:grid-cols-5">
        {categories2.map((item, index) => (
          <div
            key={item.id}
            className="min-w-[200px] max-w-[200px] cursor-pointer"
          >
            <img
              src={item.img}
              alt=""
              className="max-h-[200px] min-h-[200px] w-full"
            />
            <h1 className="text-[20px] py-5 font-semibold">{item.title} </h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CandyCateg;

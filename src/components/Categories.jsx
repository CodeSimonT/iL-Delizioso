import React from "react";
import { categories } from "../constants";

const Categories = () => {
  return (
    <section className="flex justify-around bg-primary py-[20px] text-white">
      {categories.map((item, index) => (
        <div key={item.id}>
          <h1 className="font-semibold text-[15px]">{item.link}</h1>
        </div>
      ))}
    </section>
  );
};

export default Categories;

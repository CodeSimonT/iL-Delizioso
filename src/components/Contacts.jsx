import React from "react";
import { socialMedia } from "../constants";
import { style } from "../styles";
const Contacts = () => {
  return (
    <section className={`${style.flexCenter} flex-col mb-20`}>
      <div>
        <h1 className={`${style.heading2} text-textcolor text-center`}>
          Follow iL Delizioso
        </h1>
        <div className="flex justify-evenly  items-center min-w-[350px]">
          {socialMedia.map((item, index) => (
            <div
              key={item.id}
              className={`${item.color} p-2 rounded-full w-[50px] cursor-pointer`}
            >
              <img src={item.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contacts;

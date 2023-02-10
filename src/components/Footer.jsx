import React from "react";
import { footer } from "../constants";
const Footer = () => {
  return (
    <section className="flex flex-col text-white bg-primary pt-20 pb-8">
      <div className="flex justify-evenly pb-20">
        {footer.map((item) => (
          <div key={item.id} className="min-w-[280px]">
            <h1 className="py-3 border-b-[0.1px] border-white border-opacity-[0.2] mb-3">
              {item.title}{" "}
            </h1>
            <ul>
              {item.list.map((number, index) => (
                <li
                  className={`${
                    index !== item.list.length - 1 ? "mb-3" : "mb-0"
                  } cursor-pointer`}
                >
                  {number.name}{" "}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <h1 className="text-center">© iL Delizioso 2000</h1>
    </section>
  );
};

export default Footer;

import { useState } from "react";
import { item1, item2 } from "../constants";
import { style } from "../styles";
const Items = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <section className={`flex flex-col mt-24 mb-10 ${style.paddingX}`}>
      <h1
        className={`text-primary font-semibold ${style.heading} pb-10 text-center `}
      >
        Bulk Candy Shipped Fast
      </h1>
      <div className="flex flex-col items-center">
        <div className={`flex flex-row justify-center border-b-2  w-full  `}>
          <div className="flex justify-between w-[200px] pb-3 text-[15px] ss:text-[20px] ss:w-[300px] ">
            <h1>Top Sellers</h1>
            <h1>New Items</h1>
          </div>
        </div>
        <div className="grid place-items-center ss:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full mt-[50px]">
          {item1.map((item, index) => (
            <div
              key={item.id}
              className="min-w-[200px] max-w-[200px] min-h-[400px] mb-5"
            >
              <img
                src={item.img}
                alt=""
                className="max-h-[200px] min-h-[200px] "
              />
              <div className="text-center">
                <p className="text-[14px] min-h-[100px] py-3">{item.title}</p>
                <h4 className="text-red-600 mb-5">{item.price} </h4>
                <button className="py-3 px-5 font-semibold text-white bg-thertiary text-[12px] rounded-[5px]">
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Items;

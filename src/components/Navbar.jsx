import { useState } from "react";
import { NavLink } from "../constants";
import { logo, close, menu, search } from "../assets";
import { style } from "../styles";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <section
      className={` ${style.paddingY} flex flex-row justify-between items-center`}
    >
      <img
        src={logo}
        alt=""
        className="w-[100px] xs:w-[130px] ss:w-[180px] xl:w-[200px] object-contain "
      />
      <ul className="sm:flex hidden">
        {NavLink.map((link, index) => (
          <div
            key={link.id}
            className={`${index !== NavLink.length - 1 ? "mr-8" : "mr-0"}
             flex flex-col justify-center items-center cursor-pointer`}
          >
            <img
              src={link.img}
              alt=""
              className="w-[25px] h-[25px] object-contain "
            />
            <h3 className="text-[12px] cursor-pointer uppercase">
              {link.link}{" "}
            </h3>
          </div>
        ))}
      </ul>
      <div className="sm:hidden block">
        <img
          src={menu}
          alt=""
          className="w-[15px] xs:w-[20px] ss:w-[25px]"
          onClick={() => setToggle(true)}
        />
      </div>
      {/* mobile view navigation bar */}
      <div
        className={`fixed h-[100%] w-[300px] bg-primary place-content-end top-0 left-0 z-[10] ${
          toggle ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between items-center border-primary border-[5px] bg-white px-3 py-5">
          <img src={logo} alt="" className="w-[150px]" />
          <img
            src={close}
            alt=""
            className="w-[25px] h-[25px]"
            onClick={() => setToggle(false)}
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <div className=" flex bg-white rounded-[5px] my-4 px-3 py-1 justify-between items-center">
            <input
              type="text"
              placeholder="Search by color or brand"
              className="outline-none p-2 text-[15px] placeholder:text-[15px]"
            />
            <img src={search} alt="" className="w-[25px] h-[25px] mx-3" />
          </div>
        </div>
        <div className="px-3">
          <ul className="">
            {NavLink.map((link, index) => (
              <div
                key={link.id}
                className={`${index !== NavLink.length - 1 ? "mb-3" : "mb-0"}
             flex  items-center cursor-pointer py-2 border-b-[0.3px] border-opacity-[0.3] border-white`}
              >
                <img
                  src={link.img}
                  alt=""
                  className="w-[25px] h-[25px] object-contain mr-5 "
                />
                <h3 className="text-white cursor-pointer text-[14px] uppercase">
                  {link.link}{" "}
                </h3>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`${
          toggle ? "block" : "hidden"
        } absolute left-0 top-0 w-[100%] backdrop-blur h-full z-[5]`}
      />
    </section>
  );
};

export default Navbar;

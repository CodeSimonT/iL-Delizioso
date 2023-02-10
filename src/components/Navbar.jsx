import { useState } from "react";
import { NavLink } from "../constants";
import { logo, close, menu } from "../assets";
import { style } from "../styles";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <section
      className={`${style.paddingY} flex flex-row justify-between items-center`}
    >
      <img src={logo} alt="" className="w-[200px] object-contain " />
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
              className="w-[20px] h-[20px] object-contain "
            />
            <h3 className="text-[12px] cursor-pointer uppercase">
              {link.link}{" "}
            </h3>
          </div>
        ))}
      </ul>
      <div className="sm:hidden block">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[25px] h-[25px]"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${toggle ? "block" : "hidden"}
         absolute top-24 right-4
        text-white bg-secondary sidebar p-[15px] rounded-[20px] 
        text-[15px] sm:text-[20px] `}
        >
          <ul>
            {NavLink.map((link, index) => (
              <div
                key={link.id}
                className={` text-[18px] flex flex-col justify-center  items-center text-white cursor-pointer 
                ${index !== NavLink.length - 1 ? "mb-4" : "mb-0"}
                `}
              >
                <h3 className="text-[12px] uppercase">{link.link} </h3>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

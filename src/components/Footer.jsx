import { useState } from "react";
import { footer, candy, customer, resource, contactfoot } from "../constants";
import { style } from "../styles";
import { arrow } from "../assets";
const Footer = () => {
  const [toggle, setToggle] = useState({
    candy: false,
    customer: false,
    resource: false,
    contact: false,
  });
  // below function to change th current state object{}
  const item1 = () => {
    setToggle((prev) => {
      return { ...prev, candy: !toggle.candy };
    });
  };
  const item2 = () => {
    setToggle((prev) => {
      return { ...prev, customer: !toggle.customer };
    });
  };
  const item3 = () => {
    setToggle((prev) => {
      return { ...prev, resource: !toggle.resource };
    });
  };
  const item4 = () => {
    setToggle((prev) => {
      return { ...prev, contact: !toggle.contact };
    });
  };
  return (
    <section
      className={`${style.paddingX} flex flex-col text-white bg-primary pt-20 pb-8  `}
    >
      <div className="sm:flex hidden justify-evenly pb-20">
        {footer.map((item) => (
          <div
            key={item.id}
            className="md:min-w-[230px] lg:min-w-[250px] min-w-[170px]"
          >
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
      {/* md footer links */}
      {/* first */}
      <div className="sm:hidden block">
        <div>
          <div
            onClick={item1}
            className={`py-5 border-y-[0.3px] border-white border-opacity-[0.2] flex justify-between ${
              toggle.candy ? "mb-5" : "mb-0"
            }`}
          >
            <h1>iL Delizioso</h1>
            <img
              src={arrow}
              alt=""
              className={`w-[20px] h-[20px] ${
                toggle.candy ? "rotate-90" : "rotate-0"
              } `}
            />
          </div>
          <div className={`${toggle.candy ? "block" : "hidden"} pb-8`}>
            {candy.map((item, index) => (
              <ul
                key={item.id}
                className={index !== candy.length - 1 ? "pb-2" : "pb-0"}
              >
                <li>{item.name} </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      {/* second */}
      <div className="sm:hidden block">
        <div>
          <div
            onClick={item2}
            className={`py-5 border-b-[0.3px] border-white border-opacity-[0.2] flex justify-between  ${
              toggle.customer ? "mb-5" : "mb-0"
            }`}
          >
            <h1>Customer Care</h1>
            <img
              src={arrow}
              alt=""
              className={`w-[20px] h-[20px] ${
                toggle.customer ? "rotate-90" : "rotate-0"
              } `}
            />
          </div>
          <div className={`${toggle.customer ? "block" : "hidden"} pb-8`}>
            {customer.map((item, index) => (
              <ul
                key={item.id}
                className={index !== candy.length - 1 ? "pb-2" : "pb-0"}
              >
                <li>{item.name} </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      {/* third */}
      <div className="sm:hidden block">
        <div>
          <div
            onClick={item3}
            className={`py-5 border-b-[0.3px] border-white border-opacity-[0.2] flex justify-between ${
              toggle.resource ? "mb-5" : "mb-0"
            }`}
          >
            <h1>Resources</h1>
            <img
              src={arrow}
              alt=""
              className={`w-[20px] h-[20px] ${
                toggle.resource ? "rotate-90" : "rotate-0"
              } `}
            />
          </div>
          <div className={`${toggle.resource ? "block" : "hidden"} pb-8`}>
            {resource.map((item, index) => (
              <ul
                key={item.id}
                className={index !== candy.length - 1 ? "pb-2" : "pb-0"}
              >
                <li>{item.name} </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      {/* fourth */}
      <div className="sm:hidden block">
        <div>
          <div
            onClick={item4}
            className={`py-5 border-b-[0.3px] border-white border-opacity-[0.2] flex justify-between ${
              toggle.contact ? "mb-5" : "mb-0"
            }`}
          >
            <h1>Contact Us</h1>
            <img
              src={arrow}
              alt=""
              className={`w-[20px] h-[20px] ${
                toggle.contact ? "rotate-90" : "rotate-0"
              } `}
            />
          </div>
          <div className={`${toggle.contact ? "block" : "hidden"} pb-8`}>
            {contactfoot.map((item, index) => (
              <ul
                key={item.id}
                className={index !== candy.length - 1 ? "pb-2" : "pb-0"}
              >
                <li>{item.name} </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <h1 className="text-center pt-10">© iL Delizioso 2000</h1>
    </section>
  );
};

export default Footer;

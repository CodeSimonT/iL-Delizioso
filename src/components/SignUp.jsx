import React from "react";
import { style } from "../styles";
const SignUp = () => {
  return (
    <section className={`py-[100px] my-28 bg-secondary ${style.flexCenter}`}>
      <div>
        <h1 className={`${style.heading2} text-white`}>
          Sign Up For Special Offers & Delicious Candy!
        </h1>
        <div className={style.flexCenter}>
          <form
            className={`${style.flexCenter} p-2 border-[1px] border-white border-opacity-[0.3]`}
          >
            <input
              type="text"
              placeholder="Enter your email address"
              className="outline-none bg-transparent min-w-[300px] mx-3 placeholder:text-white placeholder:opacity-[0.8] text-white"
            />
            <button className="bg-thertiary py-2 px-6 rounded-[3px] text-white text-[15px] cursor-pointer">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

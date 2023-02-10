import React from "react";
import {
  Navbar,
  Hero,
  Categories,
  Items,
  CandyCateg,
  SecImg,
  Features,
  SignUp,
  Contacts,
  Footer,
} from "./components";
import { style } from "./styles";

const App = () => {
  return (
    <div className="w-full overflow-hidden font-poppins">
      <div className={`${style.paddingX}`}>
        <Navbar />
      </div>
      <div>
        <Categories />
      </div>
      <div>
        <Hero />
        <Items />
        <CandyCateg />
        <SecImg />
        <Features />
        <SignUp />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
};

export default App;

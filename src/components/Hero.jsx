import { useState, useEffect } from "react";
import { logo1, logo2, logo3 } from "../assets";
const image = [logo1, logo2, logo3];
const Hero = () => {
  const [img, setImg] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setImg((prev) => (prev === image.length - 1 ? 0 : prev + 1));
    }, 5000);
  }, []);
  return (
    <section>
      <img
        src={image[img]}
        alt=""
        className="w-[100%] max-h-[70%] object-contain "
      />
    </section>
  );
};

export default Hero;

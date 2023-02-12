import React from "react";
import { features } from "../constants";
import { style } from "../styles";
const Features = () => {
  return (
    <section className={`${style.flexCenter} flex-col ${style.paddingX}`}>
      <h1
        className={`${style.heading} text-primary font-semibol text-center font-semibold`}
      >
        Shop Featured Candy Brands
      </h1>
      <div className="grid place-items-center ss:grid-cols-2 md:grid-cols-4 w-full mb-20">
        {features.map((item, index) => (
          <div key={item.id}>
            <img
              src={item.img}
              alt=""
              className="min-w-[300px] max-w-[300px] min-h-[150px] max-h-[150px]"
            />
          </div>
        ))}
      </div>
      <p className="text-justify text-textcolor text-[13px] md:text-[15px]">
        Welcome to iL Delizioso, the online bulk candy store that has over 6,000
        fresh candies ready for delivery directly to your door! Are you having
        trouble finding treats and party supplies near you? We make it
        effortless to find candies by color, flavor (mint, sour, and spicy),
        event (birthday, wedding, baby shower), or holiday (Christmas,
        Valentines Day, Easter, or Halloween). You can even conveniently search
        international candy by nation, for hard to find Japanese or Mexican
        sweets! With so much to choose from, you’ll gladly do jumping jacks to
        burn off candy calories from the old time candy classics we have in
        stock like Chuckles, Bit-O-Honey, and DOTS, or the all-time favorite
        chocolate goodies like Snickers and M&M candies! With the ease of
        shopping from home, you’ll find not just candy, but snacks like organic
        gummies, Cracker Jacks, and Old Trapper Jerky, as well as festive party
        supplies, including the pinata and balloons you need to make your
        celebration unforgettable! We even have wholesale and discount
        purchasing options for your business or catering services to help
        promote a healthy bottom line! Enter the delicious world of
        confectionary delights, where your sweet satisfaction is our number one
        priority!
      </p>
    </section>
  );
};

export default Features;

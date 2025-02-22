import React from "react";

import Marquee from "react-fast-marquee";

const images = [
  "//eleatcereal.com/cdn/shop/files/IMG_2671_3_600x600.jpg?v=1722261321",
  "//eleatcereal.com/cdn/shop/files/IMG_2589_600x600.jpg?v=1722261321",
  "//eleatcereal.com/cdn/shop/files/instagram-min_600x600.png?v=1716024910",
  "//eleatcereal.com/cdn/shop/files/Mocha_Milk_2_600x600.jpg?v=1722261329",
  "//eleatcereal.com/cdn/shop/files/IMG_2590_600x600.jpg?v=1722261320",
  "//eleatcereal.com/cdn/shop/files/IMG_2374_5_600x600.heic?v=1722261322",
  "//eleatcereal.com/cdn/shop/files/Mocha_Raspberry_Yog_Bowl_1_600x600.jpg?v=1722261395",
];

const HomeInsta  = () => {
  return (
    <Marquee>
      <section className="relative overflow-hidden bg-gray-100 ">
        <div className="flex space-x-4 animate-marquee">
          {[...images, ...images].map((src, index) => (
            <div key={index} className="h-40 w-40 md:h-74 md:w-74 relative">
              <a
                href="https://instagram.com/eleatcereal"
                target="_blank"
                rel="noopener noreferrer"
                className="block absolute top-0 left-0 h-full w-full"
              >
                <img
                  src={src}
                  alt="Instagram post"
                  className="absolute top-0 left-0 h-full w-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                />
              </a>
            </div>
          ))}
        </div>
      </section>
    </Marquee>
  );
};

export default HomeInsta;

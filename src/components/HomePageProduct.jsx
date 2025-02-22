import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ReviewSection from "./ReviewSection";
import reviews from "../data/reviews";

const logos = [
  "//eleatcereal.com/cdn/shop/files/Frame_76_b9db3b98-6d68-41a4-bc74-405e19ebe568.png?v=1704723432",
  "//eleatcereal.com/cdn/shop/files/Sheerluxe-logo-white.webp?v=1707771700",
  "//eleatcereal.com/cdn/shop/files/Womens-Health-Logo-1.png?v=1707772007",
  "//eleatcereal.com/cdn/shop/files/Frame_78_668357db-0efe-4ed6-a39c-e0cb4d0b838d.png?v=1704723443",
  "//eleatcereal.com/cdn/shop/files/Frame_79_06d441e6-dd96-40ca-9bee-ce5a41e11187.png?v=1704723449",
];

const HomePageProduct = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };
  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="w-full ">
      {/* Marquee Section */}
      <div className="w-full bg-black py-5 overflow-hidden">
        <div className="flex items-center justify-center mb-3">
          <span className="text-white uppercase font-bold text-sm">
            As Seen In
          </span>
        </div>
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="flex animate-[scroll_15s_linear_infinite] space-x-8">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Brand Logo"
                className="h-10 w-auto object-contain"
              />
            ))}
            {logos.map((logo, index) => (
              <img
                key={`dup-${index}`}
                src={logos}
                alt="Brand Logo"
                className="h-10 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Heading Section */}
      <div className="shopify-section z-0 ">
        <section className="homepage-product-types w-full overflow-x-hidden bg-natural py-10">
          <h2 className="text-5xl font-bold text-center text-black mb-4">
            Get started with ELEAT
          </h2>
          <span className="block font-light text-black text-center mb-8">
            All-in-one protein breakfast to help you perform your best
          </span>

          {/* Product Cards Section */}
          
            
              <ProductCard/>
               
          {/* </div> */}
        </section>
      </div>
      <ReviewSection />
    </div>
  );
};

export default HomePageProduct;

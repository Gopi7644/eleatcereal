import React from "react";
import asset0 from "../assets/asset0.png";

const Hero = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between bg-[#6be3ed]">
        {/* Header Section */}
        <div className="w-full flex justify-end items-left desktop:items-center px-4 py-10   pl-8 md:pl-16">
          <div className="md:px-6 md:py-8 pt-4  flex flex-col items-start justify-center w-full">
            <a href="">
              <span className="flex gap-x-1 mb-2">
                <h6 className="text-sm border-b-2 border-black font-semibold">
                  4.6 FROM 3700+ HAPPY CUSTOMERS
                </h6>
              </span>
            </a>

            <h1 className="w-full text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Fuel Your Mornings with High Protein Breakfast
            </h1>

            <h5 className="w-full text-lg lg:text-xl font-light mb-6">
              The ultimate guilt-free breakfasts, formulated for active
              lifestyles
            </h5>

            <div className="flex flex-col gap-y-4">
              <a href="#">
                <button className="w-full md:w-96 bg-black text-white py-3 px-6 text-lg md:text-xl font-medium rounded-full hover:bg-white hover:text-black transition-all">
                  BUILD YOUR OWN BUNDLE
                </button>
              </a>
              <a href="#" aria-label="Another option for breakfast bundle">
                <button className="w-full md:w-96 border-2 border-black text-black py-3 px-6 text-lg md:text-xl font-medium rounded-full hover:bg-black hover:text-white transition-all">
                  New: PROTEIN OATS
                </button>
              </a>
            </div>

            <div className="mt-6 text-black font-medium">
              <span>Join 50,000+ who made the switch</span>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full col-span-12 desktop:col-span-6 flex justify-center md:justify-end ">
          <img
            src={asset0}
            className="w-full h-full object-cover object-center"
            alt="Breakfast Product"
          />
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Hero;

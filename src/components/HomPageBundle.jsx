import React from "react";
import bundle from "../data/bundle";

import BundleCards from "./BundleCards";

const HomePageBundle = () => {
  // console.log("Bundle Data:", bundle);

  return (
    <section className=" homepage-bundle px-6 desktop:px-24 mt-0 desktop:mt-10 mb-10 bg-sky">
      {/* Background Section */}
      <div className="relative bg-[#6be3ed] overflow-hidden  w-full h-[200px] desktop:h-[250px] flex justify-center items-center">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://cdn.shopify.com/s/files/1/0612/0852/7092/files/ChocCaramel-Line_c8b283d9-1297-4ebc-afa1-f15a9042929f.png?v=1710947141"
            alt="Background Design"
            className="w-full h-full object-cover opacity-90"
          />
        </div>

        {/* Content */}
        <div className="relative flex flex-col items-center text-center z-10">
          <p className="text-3xl font-semibold text-black">
            Ready to upgrade your breakfast
          </p>
          <a href="/products/build-a-bundle" className="mt-4">
            <button className="bg-black text-white text-lg font-medium uppercase px-6 py-2 rounded-full shadow-md transition-all hover:bg-gray-800">
              Build your own bundle
            </button>
          </a>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto py-12 desktop:py-18 desktop:overflow-x-hidden">
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 text-center overflow-x-auto scrollbar-hide px-4">
          {bundle.map((item) => (
            <div
              key={item.collection}
              className={`relative h-40 w-60 flex-shrink-0 md:w-full shadow-md hover:shadow-lg 
          ${
            item.name === "Cereal"
              ? "bg-[#6BE3ED]"
              : " ty  bg-[rgb(242,240,237)]"
          }`}
            >
              <h3 className="font-semibold text-3xl">{item.name}</h3>
              <p className="text-lg mt-4 font-bold">{item.description}</p>

              {item.name === "Cereal" && (
                <div className="absolute -bottom-2 left-0 right-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="23"
                    viewBox="0 0 616 23"
                    fill="none"
                  >
                    <path
                      d="M0.5 2H616V12.5H48.0487L45.4253 15.5L38.8669 6L30.6688 19L22.4708 12.5H0.5V2Z"
                      fill="#6BE3ED"
                    ></path>
                    <path
                      d="M0 12.7407H23.9383L30.1688 19L38.6948 6L44.9253 16.1111L47.2208 12.7407H616"
                      stroke="#241F21"
                      strokeWidth="8"
                    ></path>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* BundleCard */}
      <div className=" px-6 md:py-18 md:overflow-x-hidden">
        <BundleCards />
      </div>
    </section>
  );
};

export default HomePageBundle;

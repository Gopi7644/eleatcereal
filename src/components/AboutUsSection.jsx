import React from "react";

const AboutUsSection = () => {
  return (
    <section className="homepage-image-text relative bg-yellow-100 p-4 md:py-16 md:px-24 overflow-hidden">
      
    
      <div className="grid grid-cols-12 gap-4 container mx-auto relative z-10">
        
        {/* Left Image */}
        <div className="col-span-12 md:col-span-5 flex items-center justify-center" style={{ aspectRatio: "1" }}>
          <img
            className="w-full h-full object-cover rounded-lg shadow-lg"
            src="https://eleatcereal.com/cdn/shop/files/DSC02280-min_1024x1024.jpg?v=1716024477"
            alt="About Us"
          />
        </div>

        {/* Right Content */}
        <div className="col-start-1 col-span-12 md:col-start-7 md:col-span-6 flex flex-col justify-center space-y-6 md:py-8">
        <a href="" className="relative inline-block group">
            <button className="relative z-10 px-6 py-3 text-white bg-purple-500  border-1 border-black font-medium rounded-full  ">
              About us
            </button>
            </a>
          <h3 className="text-gray-900 text-4xl font-light">The journey to reinvent breakfast</h3>
          <p className="text-gray-700 text-lg font-light">
            Over the last 2 years, we have been on a mission to provide you with a healthier way to start your day.
            So many of us start our day with cereal, however, the majority are packed full of sugar and lack any
            nutritional benefit. We’ve reinvented cereal to revolutionize your breakfasts.
          </p>

          {/* OUR STORY Button */}
          <a href="/our-story" className="relative inline-block group">
            <button className="relative z-10 px-6 py-3 text-white bg-black font-medium rounded-full  ">
              OUR STORY
            </button>
            <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full"></div>
          </a>
        </div>

      </div>

      {/* Right Background Image (Desktop) */}
      <div className="absolute top-0 right-0 bottom-0 z-0 hidden md:block">
        <img
          src="https://cdn.shopify.com/s/files/1/0612/0852/7092/files/Component_3.png?v=1710951247"
          className="w-full h-full"
          alt="Background"
        />
      </div>

      {/* Mobile Background Image */}
      <div className="absolute top-0 right-0 bottom-0 left-0 z-0 md:hidden">
        <img
          src="https://cdn.shopify.com/s/files/1/0612/0852/7092/files/journey-svg.png?v=1712915831"
          className="w-full h-full"
          alt="Mobile Background"
        />
      </div>

    </section>
  );
};

export default AboutUsSection;

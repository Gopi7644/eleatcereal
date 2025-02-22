import React from "react";

const HomePageBenifits = ({
  title,
  image,
  benefitleft = [],
  benefitRight = [],
}) => {
  return (
    <section className="relative bg-[rgba(168,143,217)] text-black py-16 px-6 overflow-hidden">
      <div className="absolute -top-72 md:-top-32 -right-40 md:right-0 z-0 w-[400px] md:w-[576px] rotate-[25deg] md:rotate-0">
        <img
          src="https://cdn.shopify.com/s/files/1/0612/0852/7092/files/Eleat-Choc-Flair.png?v=1710862450"
          alt="Top Flair"
          className="w-full"
        />
      </div>

      <div className="absolute -bottom-72 left-0 z-0 w-[576px]">
        <img
          src="https://cdn.shopify.com/s/files/1/0612/0852/7092/files/background-svg.png?v=1710861959"
          alt="Bottom Background"
          className="w-full h-auto"
        />
      </div>

      <div className="relative text-center ">
        <h2 className="text-4xl font-bold mb-8 ">{title}</h2>
      </div>
      <div className="max-w-5xl mx-auto relative  ">
        <div className="flex flex-col md:flex-row items-center gap-8 pl-10 ">
          <div className="flex flex-col gap-8 text-left">
            {benefitleft?.map((benefit, index) => (
              <div key={index} className="relative ">
                <h3 className="font-bold text-xl md:text-2xl bg-white border border-black text-gray-800 px-4 py-2 rounded-4xl inline-block shadow-md">
                  {benefit.title}
                </h3>

                <p className="text-middle mt-2 text-black">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex-shrink-0 ">
            <img src={image} alt="ElEAT Product" className="w-80" />
          </div>

          <div className="flex flex-col gap-8 ">
            {benefitRight?.map((benefit, index) => (
              <div key={index} className="relative">
                <h3 className="font-bold text-xl md:text-2xl bg-white border border-black text-gray-800 px-4 py-2 rounded-4xl inline-block shadow-md">
                  {benefit.title}
                </h3>

                <p className="text-middle mt-2 text-black">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageBenifits;

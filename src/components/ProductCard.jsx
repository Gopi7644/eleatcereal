import React, { useState } from "react";
import products from "../data/products";

const ProductCard = ({ image, title, description, link }) => {
  return (
    <div className="w-full max-w-sm bg-white shadow-lg  rounded-3xl    p-6 overflow-hidden">
      <img src={image} alt={title} className="w-full object-cover " />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <a
          href={link}
          className="block text-center bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
        >
          SHOP NOW
        </a>
      </div>
    </div>
  );
};

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div className="hidden sm:grid sm:grid-cols-4 p-7 sm:gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      <div className="sm:hidden flex flex-col items-center">
        <ProductCard {...products[currentIndex]} />

        <div className="flex justify-between items-center mt-4 w-full">
          <button
            onClick={handlePrev}
            className="text-[rgb(107,227,237)] text-3xl  px-4 py-2 rounded-md hover:bg-gray-300 transition"
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            className="text-[rgb(107,227,237)] text-3xl  px-4 py-2 rounded-md hover:bg-gray-300 transition"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;

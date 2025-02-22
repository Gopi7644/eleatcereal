import React, { useState, useEffect } from "react";
import bunndlecard from "../data/bunndlecard"; 

const BundleCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4); // Default: Desktop View
  const totalCards = bunndlecard.length;

  
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) setVisibleCards(1); // Mobile
      else if (window.innerWidth < 1024) setVisibleCards(2); // Tablet
      else setVisibleCards(4); // Desktop
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  
  const nextSlide = () => {
    if (currentIndex + visibleCards < totalCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative w-full overflow-hidden md:px-4">
      {/* Cards Wrapper */}
      <div
        className="flex gap-4 transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex * 100) / visibleCards}%)`,
        }}
      >
        {bunndlecard.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full sm:w-[48%] md:w-[48%] lg:w-[24%] 
              bg-[rgb(242,240,237)] shadow-lg rounded-lg overflow-hidden hover:bg-gradient-to-r 
              from-teal-500 to-teal-200"
          >
            <img src={item.image} alt={item.title} className="w-full object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm">Price: {item.price}</p>
              <p className="text-gray-600 text-sm">Rating: {item.rating}</p>
              <p className="text-gray-600 text-sm mb-3">{item.reviews} Reviews</p>
              <a
                href={item.link}
                className="block text-center bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
              >
                SHOP NOW
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-[rgb(107,227,237)] p-5 py-9 rounded-r-full shadow-md 
                  hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentIndex === 0}
      >
        <span className="text-3xl text-black font-bold">❮</span>
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-[rgb(107,227,237)] p-5 py-9 rounded-l-full shadow-md 
                  hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentIndex + visibleCards >= totalCards}
      >
        <span className="text-3xl text-black font-bold">❯</span>
      </button>
    </div>
  );
};

export default BundleCards;

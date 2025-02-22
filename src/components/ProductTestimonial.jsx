import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import testimonial from "../data/testimonial";
import TestimonialCard from "./TestmonialCard";

const ProductTestimonial = () => {
  return (
    <div className="w-full bg-[rgba(242,240,237,1)] ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 ">
          <h2 className="text-gray-900  p-10 font-bold text-3xl md:text-5xl text-center md:text-left">
            Trusted by the best
          </h2>

          <div className="hidden md:flex space-x-6">
            {/* Previous Button */}
            <button className="custom-prev-button bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M15.961 26.157L3.038 14.157L15.961 2.157"
                  stroke="#241F21"
                  strokeWidth="3.692"
                />
                <path d="M3 14.157H27.5" stroke="#241F21" strokeWidth="3.692" />
              </svg>
            </button>

            {/* Next Button */}
            <button className="custom-next-button bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M12.039 2.157L24.962 14.157L12.039 26.157"
                  stroke="#241F21"
                  strokeWidth="3.692"
                />
                <path
                  d="M25 14.157L0.5 14.157"
                  stroke="#241F21"
                  strokeWidth="3.692"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Swiper Component */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          centeredSlides={true}
          navigation={{
            nextEl: ".custom-next-button",
            prevEl: ".custom-prev-button",
          }}
          breakpoints={{
            320: { slidesPerView: 1 }, // Mobile: 1 slide full width
            640: { slidesPerView: 1.3 }, // Tablet: 1 full, next partial
            // 1024: { slidesPerView: 1.5 }, // Medium: Half-visible slides
            // 1280: {
            //   slidesPerView: 1.8, // Ensures 3 cards with first & last half visible
            // },
            1024: { slidesPerView: 1.5 }, // Medium: Half-visible slides
            1280: {
              slidesPerView: 3, // Three slides visible
              spaceBetween: 16, // Adjust the space between slides
              centeredSlides: true, // Ensure the slides are centered
            },
          }}
          // Ensures swiper takes full width
        >
          {testimonial.map((testimonial, index) => (
            <SwiperSlide key={index} className="">
              <TestimonialCard
                image={testimonial.image}
                quote={testimonial.quote || testimonial.testimonial}
                name={testimonial.name}
                role={testimonial.designation || testimonial.role}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductTestimonial;

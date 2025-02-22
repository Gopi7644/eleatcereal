import React from "react";
import ReviewCard from "./ReviewCard";
import reviews from "../data/reviews";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ReviewSection = () => {
  return (
    <section className="w-full bg-gray-100 py-10 px-4 ">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">
          Trusted by 50,000+ customers to fuel their mornings
        </h2>

        {/* Rating Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <span className="text-lg font-semibold text-black">Excellent</span>

          <div className="flex text-[#6be3ed] text-2xl">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </div>

          <span className="text-gray-700 text-lg">
            <strong>4.6</strong> based on <strong>3,753</strong> reviews
          </span>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>

      {/* Reviews.io Logo */}
      <div className="text-center mt-6">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.reviews.io/company-reviews/store/eleatcereal.com"
          className="inline-flex items-center"
          title="Read more reviews on REVIEWS.io"
        >
          <img
            src="https://assets.reviews.io/img/all-global-assets/logo/reviewsio-logo.svg"
            alt="REVIEWS.io Logo"
            width="120"
            height="19"
          />
        </a>
      </div>
    </section>
  );
};

export default ReviewSection;

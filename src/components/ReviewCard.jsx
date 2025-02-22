import React from "react";

const ReviewCard = ({ name, rating, comment, location }) => {
  return (
    <div className=" p-4 rounded-lg ">
      <p className="text-lg font-semibold">{name}</p>
      <p className=" text-[#6be3ed]">{"★".repeat(rating)}</p>
      <p className="text-gray-600">{comment}</p>
      <p className="text-gray-400 text-sm">{location}</p>
    </div>
  );
};

export default ReviewCard;

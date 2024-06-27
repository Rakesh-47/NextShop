"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductCard = ({ img, title, desc, rating, price }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const genr = (rating) => {
    const maxStars = 5;
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<AiFillStar key={`filled-${i}`} />);
    }

    for (let i = rating; i < maxStars; i++) {
      stars.push(<AiOutlineStar key={`unfilled-${i}`} />);
    }

    return (
      <div className="flex items-center text-[#ff9529]">
        {stars}
      </div>
    );
  };

  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[300px] md:max-w-[350px] lg:max-w-[400px]">
      <div className="w-full h-[200px] relative">
        <Image
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
      </div>
      <div className="space-y-2 py-2">
        <h2 className="text-accent font-medium uppercase">{title}</h2>
        <div className="text-gray-500 font-small">
          <p className={`${isExpanded ? '' : 'line-clamp-2'}`}>
            {desc}
          </p>
          {!isExpanded && (
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => setIsExpanded(true)}
            >
              ... Read more
            </span>
          )}
          {isExpanded && (
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => setIsExpanded(false)}
            >
              Show less
            </span>
          )}
        </div>
        {genr(rating)}
        <div className="font-bold flex items-center justify-between gap-4">
          <div>
            Rs{price}.00
            <del className="text-gray-500 ml-2">Rs{parseInt(price) + parseInt(price)/2+50}</del>
          </div>
          <button className="bg-accent text-white rounded-md px-2 py-0 hover:bg-black">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

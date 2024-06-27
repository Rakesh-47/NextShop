import React from "react";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Part1 = () => {
  return (
    <div className="border-b border-gray-200 py-5">
      <div className="container sm:flex justify-between items-center">
        <div className="font-bold text-2xl text-center pb-4 sm:pb-0 text-accent">BARGAIN BAY</div>
        <div className="w-full sm:w-[300px] md:w-[70%] relative">
          <input
            className="border-gray-200 border p-2 px-4 rounded-lg w-full"
            type="text"
            placeholder="Enter any product name..."
          />
          <BsSearch className="absolute right-0 top-0 mr-3 mt-3 text-gray-200" size={20} />
        </div>
        <div className="hidden lg:flex text-gray-500 text-[25px] space-x-4">
          <div>
            <BiUser />
          </div>
          <div className="relative">
            <FiHeart />
            <div className="bg-red-600 rounded-full absolute w-[18px] h-[18px] text-[12px] text-white  flex items-center  justify-center top-0 right-0 transform translate-x-1 -translate-y-1">
              0
            </div>
          </div>
          <div className="relative">
            <HiOutlineShoppingBag />
            <div className="bg-red-600 rounded-full absolute w-[18px] h-[18px] text-[12px] text-white  flex items-center  justify-center top-0 right-0 transform translate-x-1 -translate-y-1">
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;

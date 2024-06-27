import React from "react";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineAppstore, AiOutlineHome } from "react-icons/ai";
import { IoMenuOutline } from "react-icons/io5";

const Mobnav = () => {
  return (
    <div className="lg:hidden z-5 fixed bottom-0 w-full bg-white shadow-md">
      <div className="flex justify-between text-[28px] py-2">
        <div><IoMenuOutline aria-label="Menu" /></div>
        <div className="relative">
          <HiOutlineShoppingBag aria-label="Shopping Bag" />
          <div className="bg-red-600 rounded-full absolute w-[18px] h-[18px] text-[12px] text-white flex items-center justify-center top-0 right-0 transform translate-x-1 -translate-y-1">0</div>
        </div>
        <div><AiOutlineHome aria-label="Home" /></div>
        <div className="relative">
          <FiHeart aria-label="Favorites" />
          <div className="bg-red-600 rounded-full absolute w-[18px] h-[18px] text-[12px] text-white flex items-center justify-center top-0 right-0 transform translate-x-1 -translate-y-1">0</div>
        </div>
        <div><AiOutlineAppstore aria-label="App Store" /></div>
      </div>
    </div>
  );
};

export default Mobnav;

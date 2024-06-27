import React from "react"
import {FiHeart}from "react-icons/fi"
import {HiOutlineShoppingBag}from "react-icons/hi"
import {AiOutlineAppstore,AiOutlineHome}from "react-icons/ai"
import {IoMenuOutline}from "react-icons/io5"

const Mobnav=()=>{
    return (
        <div className="lg:hidden fixed bottom-0 w-full bg-white ">
            <div className="flex justify-between text-[28px] py-2">
            <div><IoMenuOutline/></div>
            <div className="relative"><HiOutlineShoppingBag/>
              <div className="bg-red-600 rounded-full absolute w-[18px] h-[18px] text-[12px] text-white  flex items-center  justify-center top-0 right-0 transform translate-x-1 -translate-y-1">0</div>
            </div>
            <div><AiOutlineHome/></div>
            <div className="relative"><FiHeart/>
            <div className="bg-red-600 rounded-full absolute w-[18px] h-[18px] text-[12px] text-white  flex items-center  justify-center top-0 right-0 transform translate-x-1 -translate-y-1">0</div>
            </div>
            <div><AiOutlineAppstore/></div>
            </div>
        </div>
    )
}
export default Mobnav
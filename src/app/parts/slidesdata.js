import { Pixelify_Sans } from "next/font/google";
import React from "react";
import Image from "next/image";

const Slidesdata =({id,img,title,maintitle,price})=>{
    return(
        <div className="outline-none  border-none relative">
            <div className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-2 lg:spce-y-2 bg-grayish sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
                <h3 className="text-accent text-[24px] lg:text-[20px]">{title}</h3>
                <h2 className="text-blacksih tect-[25px] md:text-[30px] lg:text-[40px] font-bold">{maintitle}</h2>
                <h3 className="text-[24px] text-gray-500">starting at {" "}<strong className="text-[20px] md:text-[24px] lg:text-[30px]">{price}</strong>.00
                </h3>
            <div className="bg-accent text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-blackish">Shop Now</div>    
            </div>
            <Image className="width-[100%] height-[300px] md:h-auto rounded-xl object-cover object-right md:object-left-bottom"
              src={img}
              width={2000}
              height={2000}
            />
        </div>
    )
}
export default Slidesdata
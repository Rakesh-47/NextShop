import  React from "react"
import Image from "next/image";
const Testimonial=()=>{
    return (
        <div>
            <div className="container py-16 grid-cols-2">
                <h2 className="font-medium text-2xl pb-2">Testimonial</h2>
                <div className="grid lg:grid-cols-[300px,1fr] gap-5">
                    <div className="border border-gray-200 rounded-2xl p-5 lg:p-0 grid place-items-center">
                        <div className="text-center flex flex-col items-center gap-2">
                             <Image className="rounded-full inline-block"
                             src="/user.jpg"
                             width={80}
                             height={80}
                             />
                             <h2 className=" font-black text-[20px]">Candelia Jennifer</h2>
                             <Image className="inline-block py-2"
                             src="/quotes.svg"
                             width={30}
                             height={30}
                             />
                             <p className="max-w-[200px] text-gray-500">
                             Having worked with some of the best in the industry, I can confidently say that Bargain Bay is a cut above the rest. Their innovation, quality, and customer service are second to none. It is a privilege to recommend Bargain Bay to anyone looking for top-tier products and services
                             </p>
                        </div>

                    </div>
                    <div>
                        <div className="bg-red-600  bg-[url(/cta-banner.jpg)] bg-cover h-[500px] rounded-2xl grid place-items-center"  >
                          <div className="bg-white min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3"> 
                            <button className="bg-blackish text-white rounded-md p-2 hover:bg-accent"> Above 40% Discount</button>
                            <h2 className="font-extrabold text-2xl text-grayishblack"> Summer Collection</h2>
                            <p className="text-gray-500 text-[20px]">Limited Time Offer! <strong>Shop Now</strong></p>
                        </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
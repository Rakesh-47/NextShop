import React from "react"

const Navi=()=>{
    return(
       <div className="hidden lg:block">
           <div className="conatiner ">
            <div className="flex w-fit gap-9 font-medium mx-auto py-3 text-blackish ">
                <div className="navi1 relative cursor-pointer">HOME</div>
                <div className="navi1 relative cursor-pointer ">CATEGORIES</div>
                <div className="navi1 relative cursor-pointer">MEN'S</div>
                <div className="navi1 relative cursor-pointer">WOMEN'S</div>
                <div className="navi1 relative cursor-pointer">HOT OFFERS</div>
                <div className="navi1 relative cursor-pointer">PERFUMES</div>
            </div>
           </div>
       </div>
    );
};
export default Navi
import React from "react";
import{BsFacebook,BsTwitter,BsInstagram,BsLinkedin,BsReddit} from "react-icons/bs"

const Toppart= ()=>{
    return (
       <div className="border-b  border-gray-200 ">
          <div className="container py-3">
            <div className="flex justify-between items-center ">
            <div className="hidden lg:flex gap-1">
                    <div className="head_icon" >
                         <BsFacebook/>
                    </div>
                    <div className="head_icon" >
                       <BsInstagram/>
                    </div>
                    <div className="head_icon" >
                       <BsLinkedin/>
                    </div>
                    <div className="head_icon" >
                       <BsReddit/>
                    </div>
                    <div className="head_icon" >
                       <BsTwitter/>
                    </div>
                </div>
                <div className="text-gray-500 text-[1em]">
                   <strong>FREE SHIPPING </strong>
                   OVER ORDER - RS 500
                </div>
                <div >
                  <select name="language" id="language" className="text-gray-500 text-[12px] w-[70px]">
                     <option value="English">English</option>
                     <option value="French">French</option>
                  </select>
                </div>
            </div>
          </div>
       </div>
    );
}
export default Toppart
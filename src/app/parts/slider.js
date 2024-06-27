'use client';

import React from "react";
import Slider from "react-slick";
import Slidesdata from "./slidesdata";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Slider1 = () => {
    let settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
    };

    const datas = [
        {
            id: 0,
            img: "/banner-1.jpg",
            title: "Unlock Exclusive Deals: Shop the Latest Trends Now!",
            maintitle: "Women's Fashion Frenzy",
            Price: "Rs 649",
        },
        {
            id: 1,
            img: "/banner-2.jpg",
            title: "Refresh Your Wardrobe: Discover Must-Have Styles Today!",
            maintitle: "Mega Sale Extravaganza",
            Price: "Rs 349",
        },
        {
            id: 2,
            img: "/banner-3.jpg",
            title: "Limited Time Offer: Shop Top Brands at Unbeatable Prices!",
            maintitle: "Accessory Bonanza",
            Price: "Rs 549",
        }
    ];

    return (
        <div>
            <div className="container pt-6 lg:pt-0">
            <Slider {...settings}>
                {datas.map((item) => {
                    return (
                        <Slidesdata
                            key={item.id}
                            img={item.img}
                            title={item.title}
                            maintitle={item.maintitle}
                            price={item.Price}
                        />
                    );
                })}
            </Slider>
            </div>
        </div>
    );
};

export default Slider1;

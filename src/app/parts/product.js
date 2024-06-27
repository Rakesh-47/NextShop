import React from "react"
import ProductCard from "./productcard"
import Mobnav from "./mobilenav"

const Product=()=>{
    const data=[
        {img:"/jacket-1.jpg",
          title:"Jacket",
          desc:"Stay warm and stylish with our ultra-chic jacket, perfect for layering and adding a touch of sophistication to any outfit.",
          rating:4,
          Price:"845"  
        },
        {
            img:"/mens.jpeg",
            title:"Shirt",
            desc:"Elevate your wardrobe with our classic shirt, designed for a perfect fit and unparalleled comfort.",
            rating:4,
            Price:"449"  
          },
          {
            img:"/sandles.jpeg",
            title:"Women Sandles",
            desc:"Step into elegance with our women's sandals, offering a blend of style and comfort for every occasion.",
            rating:3,
            Price:"645"  
          },
          {
            img:"/watch.jpeg",
            title:"Rolex Watch",
            desc:"Timeless luxury and precision come together in our Rolex watch, the ultimate statement of sophistication.",
            rating:5,
            Price:"2245"  
          },
          {
            img:"/blazer.jpg",
            title:"Blazer",
            desc:"Make a bold statement with our tailored blazer, the perfect blend of elegance and modern style for any occasion.",
            rating:4,
            Price:"1545"  
          },

          {
            img:"/shoes.jpeg",
            title:"Running Shoe",
            desc:"Walk with confidence in our versatile shoes, crafted for durability and style, no matter where your day takes you.",
            rating:5,
            Price:"899"  
          },

          {
            img:"/t shirt.jpeg",
            title:"T-Shirt",
            desc:"Experience ultimate comfort with our premium cotton T-shirt, designed for a casual yet refined look.",
            rating:4,
            Price:"349"  
          },
          {
            img:"/perfumes.jpeg",
            title:"Perfume",
            desc:"Indulge in our signature perfume, a captivating blend of scents that leaves a lasting impression.",
            rating:3,
            Price:"599"  
          },

        


    ]
    return (
        <div>
            <div className="container pt-16 pb-24">
                <h2 className="font-medium text-2xl pb-4">New Products</h2>
                <div className="grid grid-colw-1 z-10 place-items-center sm:pace-items-start sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:grid-cols-4 xl:gap-x-20 xl:gap-y-10">{
                    data.map((item,index) => {
                         return(
                            <ProductCard
                            key={index}
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                            rating={item.rating}
                            price={item.Price}
                            />
                         )
                    })
                    }
                </div>
            </div>
            <Mobnav/>
        </div>
    )
}
export default Product
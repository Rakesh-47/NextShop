import Image from "next/image";
import Slider1 from "./parts/slider";
import Product from "./parts/product";
import Testimonial from "./parts/testimonial";

export default function Home() {
  return (
   <main>
      <Slider1/>
      <Product/>
      <Testimonial/>
   </main>
  );
}

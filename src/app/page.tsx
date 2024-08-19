
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Slider from "./_components/Slider";
import Gallary from "./_components/Gallary";
import Product from "./_components/Product";
import Contact from "./_components/Contact";

export default function Home() {
  return (
    <div>
      
      <Hero/>
      <Slider/>
      <Gallary/>
      <Product/>
      <Contact/>
    </div>
  );
}

import BestProducts from "@/components/BestProducts";
import BuyNow from "@/components/BuyNow";
import ClientsSay from "@/components/ClientsSay";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection"; 
import SaveMemories from "@/components/SaveMemories";
import WhyDash from "@/components/WhyDash";
import FourBoxes from "@/components/FourBoxes"
import Image from "next/image";
import OwlCarousel from "@/components/owl";

export default function Home() {
  return (
    <>
   <Header />
   <HeroSection/> 
   <WhyDash/>
    <FourBoxes/>
   <BestProducts/>
   <BuyNow/> 
   <SaveMemories/>
  <ClientsSay/>
  <Faqs/>
  <Footer/>
    </>
  );
}

"use client";
import Image from "next/image";
import { useEffect } from "react";
import pro1 from "../images/pro-1.jpg";
import pro2 from "../images/pro-2.jpg";
import pro3 from "../images/pro-3.jpg";
import pro4 from "../images/pro-4.jpg";
import pro5 from "../images/pro-5.jpg";
import drag from "../images/drag.svg";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// Removed import for non-existent 'owl.transitions.css'
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
  require("owl.carousel");
}

export default function BestProducts() {
  useEffect(() => {
    $(".owl-carousel").owlCarousel({
      items: 5,
      loop: true,
      nav: true, // Enable navigation arrows
      dots: false, // Enable dots for pagination
      navText: ["<", ">"], // Optional: Customize navigation text
      dots: true,
      margin: 15,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  }, []);
  return (
    <>
      <div className="text-center">
        <h2 className="text-white font-ws lg:text-[47px] font-[500] text-[37px] leading-[1.2]">
          Meet Our Best{" "}
          <span className="text-[#ED0EEB] font-[900]">Products</span>
        </h2>

        <div className="carousel mt-40 mb-30 relative   rotate-[-11deg] top-[25px]">
          <Image
            src={drag}
            alt=""
            className="absolute left-1/2 transform -translate-x-1/2 top-[-80px] z-10"
          />
          <div className="owl-carousel cursor-grab active:cursor-grabbing ">
            <div className="item">
              <Image className="rounded-[20px]" src={pro1} alt="" />
            </div>
            <div className="item">
              <Image className="rounded-[20px]" src={pro2} alt="" />
            </div>
            <div className="item">
              <Image className="rounded-[20px]" src={pro3} alt="" />
            </div>
            <div className="item">
              <Image className="rounded-[20px]" src={pro4} alt="" />
            </div>
            <div className="item">
              <Image className="rounded-[20px]" src={pro5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

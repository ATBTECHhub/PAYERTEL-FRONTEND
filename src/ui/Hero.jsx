import React from "react";
import { hero } from "../constant/data";

const Hero = () => {
  return (
    <section className="container py-[100px] lg:py-[150px]">
      <div className="flex space-x-28 items-center py-[100px] flex-wrap">
        <div className="py-[145px] space-y-[35px] lg:w-2/3">
          {" "}
          <h1 className="w-[800px] font-bold text-black lg:text-[64px] lg:leading-[78px] text-[48px] leaading-[60px]">
            Seamless And Efficient Telecom solutions At your Finger Tips
          </h1>
          <p className="w-[722px] font-normal text-xl leading-8">
            Welcome to PAYERTEL, your trusted platform for all your needs.
            Wether you need to purchase data bundles, top up your airtime,
            convert your airtime to cash, or subscribe to cable networks,
            PAYERTEL offers a seamless and efficient solution at competitive
            rates. Our platform is designed to cater for busy proffessionals,
            tech-savvy students, stay-at home parents, small business owners and
            retirees.{" "}
          </p>
          <div className="py-4 bg-white text-primary">
            {" "}
            <a className="border-[3px] px-3 py-3 rounded-2xl" href="">
              Get Started
            </a>
          </div>
        </div>
        <div className="absolute pb-32">
          <img
            className="lg:w-[1200px] h-[902px] w-full object-cover"
            src="/image/herohand.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

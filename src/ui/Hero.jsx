import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid lg:grid-cols-[40%_60%]">
        <div className="text-left">
          <h1 className="text-5xl leading-snug font-extrabold ">
            Seamless And Efficient Telecom Solutions At Your Finger Tips
          </h1>
          <p className="leading-7 pt-8">
            Welcome to PAYERTEL, your trusted platform for all your telecom
            needs. Weather you need to purchase data bundles, top up your
            airtime, convert airtime to cash, or subscribe to cable networks,
            PAYERTEL offers a seamless and efficient solution at competitive
            rates. Our platform is designed to cater for busy proffesionals,
            tech-savvy students, stay-at-home parents, small business owners and
            retiree.
          </p>
          <div className="pt-10 ">
            {" "}
            <a href="" className="border rounded-lg  px-6 py-1 text-black">
              Get Started
            </a>
          </div>
        </div>
        <div className="">
          <img className="w-full" src="/image/3anglehand.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

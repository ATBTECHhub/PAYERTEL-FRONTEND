import React from "react";
import { flow } from "../constant/data";

const Process = () => {
  return (
    <section className="container py-[100px] lg:py-[150px]">
      <div className="font-bold text-[40px] lg:text-[64px] text-primary text-center">
        {" "}
        <h1>How It Works</h1>
      </div>
      <div className="flex space-x-[170px] gap-[50px] lg:gap[170px]">
        <div className="space-y-14 py-[105px] lg:w-1/2 lg:order-none order-2 pt-28">
          <div>
            <div className="flex gap-[32px]">
              <span className="border-[2px] px-4 rounded-full py-2 bg-primary text-white font-mediun">
                1
              </span>
              <h1 className="pt-1 font-bold text-3xl text-primary">Sign in</h1>
            </div>
            <p className="font-normal lg:w-[453px] leading-8 pl-[75px] ">
              Initiate a sign in process into your payertel account by inserting
              your unique username and password
            </p>
          </div>
          <div>
            <div className="flex gap-[32px]">
              {" "}
              <span className="border-[2px] px-4 py-2 rounded-full bg-primary text-white font-medium">
                2
              </span>
              <h1 className="pt-1 font-bold text-3xl text-primary">
                Fund Wallet
              </h1>
            </div>
            <p className="font-normal lg:w-[453px] leading-8 pl-20 ">
              Click on the wallet icon ,then proceed to initiate funds into your
              wallet via our payment gateways and get credited instantly
            </p>
          </div>
          <div>
            <div className="flex gap-[32px]">
              {" "}
              <span className="border-[2px] px-4 py-2 rounded-full  bg-primary text-white">
                3
              </span>
              <h1 className="pt-1 font-bold text-3xl text-primary">
                Place Order
              </h1>
            </div>
            <p className="font-normal lg:w-[453px] leading-8 pl-20 ">
              Select any order icon of your choice on our mouth watering
              services that comes with an amazing discount rates
            </p>
          </div>
          <div>
            <div className="flex gap-[32px]">
              {" "}
              <span className="border-[2px] px-4 py-2 rounded-full bg-primary text-white">
                4
              </span>
              <h1 className="pt-1 font-bold text-3xl text-primary">
                Instant Activation
              </h1>
            </div>
            <p className="font-normal lg:w-[453px] leading-8 py-[16px] pl-20 ">
              Once your payment is confirmed, your plan is instantly activated.
              You can start using your data right away or any selected services
              you choose enjoying uninterrupted connectivity for all your online
              activities
            </p>
          </div>
        </div>
        <div className="pt-28 lg:w-auto">
          {" "}
          <img className="lg:w-[746px] h-[800px] w-full object-cover" src="/image/frame.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Process;

import React from "react";
import { PiBellSimpleRingingBold } from "react-icons/pi";
import { FaPlusCircle } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { user } from "../constant/data";

const Dashnew = () => {
  return (
    <section>
      <nav className="flex justify-between items-center container lg:py-10 py-5">
        <div className="flex items-center gap-4">
          <img
            className="lg:w-20 lg:h-20 w-10 h-10"
            src="/image/dash.png"
            alt=""
          />
          <div className="grid lg:pb-3 pb-1">
            {" "}
            <h1 className="lg:text-lg text-xs">Welcome!</h1>
            <p className="lg:text-sm text-xs">Dee-zigi</p>
          </div>
        </div>
        <div>
          {" "}
          <PiBellSimpleRingingBold className="lg:w-8 lg:h-10 w-4 h-5" />
        </div>
      </nav>
      <div className="lg:py-10 space-y-4 xl:w-[20%] mx-auto border px-3 rounded-3xl bg-blue-900">
        <h1 className="font-normal text-lg text-center text-white">
          Total Balance
        </h1>
        <div className="flex items-center space-x-2 lg:pl-12">
          <h2 className="font-bold lg:text-2xl lg:pr-16 text-white">
            NGN 600,000
          </h2>
          <i className="absolute xl:pl-44">
            {" "}
            <FaEye className="lg:w-4 lg:h-4 text-white" />
          </i>
        </div>
        <div className="flex items-center lg:pl-14 text-sm text-primary">
          {" "}
          <a className="border-1 lg:px-8 py-2 rounded-full bg-white" href="">
            Fund Wallet
          </a>
          <i className="absolute lg:pl-32">
            {" "}
            <FaPlusCircle className="lg:w-4 lg:h-4" />
          </i>
        </div>
      </div>
      <div className="lg:py-12 lg:flex items-center justify-center lg:space-x-20 ">
        {user.map((item, i) => (
          <div className="border-b-4 rounded-b-3xl border-x-4 py-3 px-8 ">
            {" "}
            <div
              className="py-1"
              dangerouslySetInnerHTML={{ __html: item.image }}
            />
            <h1 className="text-center font-bold lg:text-sm">{item.heading}</h1>
          </div>
        ))}
      </div>
      <div className="lg:text-sm font-bold text-primary lg:py-9 flex justify-between container">
        <h1 className="lg:pl-24">Transaction History</h1>
        <span className="lg:pr-24">See all</span>
      </div>
    </section>
  );
};

export default Dashnew;

import React from "react";
import { PiBellSimpleRingingBold } from "react-icons/pi";
import { GoDownload } from "react-icons/go";
import { FaCirclePlus } from "react-icons/fa6";
import { cable, foot, leg } from "../constant/data";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";

const Cabletv = () => {
  return (
    <section>
      <nav className="flex justify-between items-center container py-[40px]">
        <div className="flex items-center gap-4">
          <img src="/image/dash.png" alt="" />
          <div className="grid pb-3">
            {" "}
            <h1 className="text-lg">Welcome!</h1>
            <p className="text-sm">Dee-zigi</p>
          </div>
        </div>
        <div>
          {" "}
          <PiBellSimpleRingingBold className="w-[33px] h-10" />
        </div>
      </nav>
      <div className=" border-[3px]   py-[50px] w-[35%] mx-auto rounded-[40px] bg-primary">
        {" "}
        <div className="text-center">
          {" "}
          <p>Total Balance</p>
          <h1 className=" font-bold text-3xl pt-4">NGN 600,000</h1>
        </div>
        <div className=" py-[49px] flex justify-center gap-[52px]">
          {" "}
          <div className="flex items-center">
            <a className="border rounded-full py-4 px-12 leading-tight" href="">
              Fund Wallet
            </a>
            <i className="absolute pl-40">
              <FaCirclePlus />
            </i>
          </div>
        </div>
      </div>
      <h1 className="font-semibold text-[45px] text-center m-11">Cable Tv</h1>
      <p className="font-semibold text-[24px] m-3 pl-96">Service Providers</p>
      <div className="flex m-8 justify-center space-x-[120px]">
        {cable.map((item, i) => (
          <div>
            {" "}
            <div dangerouslySetInnerHTML={{ __html: item.image }} />
          </div>
        ))}
      </div>
      <div className=" w-[50%] mx-auto m-24 space-y-[120px]">
        <div className="grid">
          <label className="pb-5 font-semibold text-2xl" htmlFor="">
            Decoder Number
          </label>
          <input
            className="w-[800px] py-5 px-3 border-[3px] rounded-full"
            type="text"
          />
        </div>

        <div className="grid">
          <label className="pb-5 font-semibold text-2xl" htmlFor="">
            Amount
          </label>
          <input
            className="w-[800px] py-5 px-3 border-[3px] rounded-full"
            type="text"
          />
        </div>
        <div className="grid">
          <label className="pb-7 font-semibold text-2xl" htmlFor="">
            Save as beneficiary
          </label>
          <input
            className="w-[800px] py-5 px-3 border-[3px] rounded-full text-center text-xl text-white font-medium bg-primary"
            type="text"
            placeholder="Continue"
          />
          <i className="absolute pl-72 pt-1">
            {" "}
            <MdOutlineCheckBoxOutlineBlank className="w-5 h-5" />
          </i>
        </div>
      </div>

      <div className=" pl-6 bg-primary py-6 px-8 space-x-[126px]">
        <div className="flex space-x-[126px]">
          {foot.map((item, i) => (
            <div dangerouslySetInnerHTML={{ __html: item.image }} />
          ))}
          <div className="block text-white pl-6">
            {" "}
            <h2 className="font-medium text-xl">Useful Links</h2>
            <ul className="text-base w-[188px] leading-7">
              <li>Home</li>
              <li>About Us</li>
              <li>How It Works</li>
              <li>Testimonials</li>
              <li>Contacts</li>
            </ul>
          </div>
          <div className="block text-white pl-10">
            {" "}
            <h3 className="font-medium text-xl">Services</h3>
            <ul className="text-base w-[285px] leading-8">
              <li>Data Bundle Purchase</li>
              <li>Airtime Top-Ups</li>
              <li>Airtime to Cash Conversion</li>
              <li>Cable Network Subscription</li>
            </ul>
          </div>
          <div className="flex items-center pl-24">
            <a className="bg-white py-3 px-8 rounded-lg" href="">
              Start Today{" "}
            </a>
            <i className="absolute pl-32">
              <FaLongArrowAltRight className="w-3 h-3" />
            </i>
          </div>
        </div>
        <div className=" py-[60px] pr-48 w-[1452px]">
          {" "}
          <hr />
        </div>
        <div className="flex items-center">
          {leg.map((item, i) => (
            <div className="flex space-x-[60px] text-white">
              {" "}
              <div dangerouslySetInnerHTML={{ __html: item.image }} />
              <h3>{item.heading1}</h3>
              <h3>{item.heading2}</h3>
              <h3>{item.heading3}</h3>
              <h3>{item.heading4}</h3>
              <div>
                {" "}
                <div dangerouslySetInnerHTML={{ __html: item.logo }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cabletv;

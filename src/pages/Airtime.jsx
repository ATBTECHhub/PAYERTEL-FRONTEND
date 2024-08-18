import React from "react";
import { PiBellSimpleRingingBold } from "react-icons/pi";
import { IoEyeSharp } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import { bundle, foot, leg } from "../constant/data";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";

const Airtime = () => {
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
      <div className=" space-y-8 items-center w-[25%] mx-auto border-[3px] py-8 rounded-[40px] bg-primary">
        <div>
          {" "}
          <h2 className="font-n0rmal text-xl text-center text-white">
            Total Balance
          </h2>
        </div>
        <div className="flex items-center gap-1">
          {" "}
          <h1 className="font-bold text-4xl pl-14 text-white">NGN 600,000</h1>
          <i>
            <IoEyeSharp className="w-6 h-6" />
          </i>
        </div>
        <div className="flex items-center pl-20 bg-white">
          <a
            className="border-[5px] rounded-full py-4 px-12 leading-tight text-primary"
            href=""
          >
            Fund Wallet
          </a>
          <i className="absolute pl-40">
            <FaCirclePlus className="bg-primary" />
          </i>
        </div>
      </div>
      <div className="space-y-[60px] w-[45%] mx-auto m-12">
        <div>
          <h1 className="font-bold text-[30px] text-center m-11">Airtime</h1>
          <p className="font-semibold text-[20px] m-3 ">
            Service Provider
          </p>
          <div className="flex justify-center m-8 space-x-[120px]">
            {bundle.map((item, i) => (
              <div>
                {" "}
                <div dangerouslySetInnerHTML={{ __html: item.image }} />
              </div>
            ))}
          </div>
        </div>
        <div className="grid">
          <div className="flex justify-between">
            {" "}
            <label className="pb-3 font-semibold" htmlFor="">
              Phone Number
            </label>
            <span className="font-bold text-primary">Select Contact</span>
          </div>
          <input
            className="w-[700px] py-4 px-3 border-[3px] rounded-full"
            type="text"
          />
        </div>
        <div className="space-x-[40px]">
          {" "}
          <input
            className="w-[200px] py-4 px-3 border-[3px] rounded-full text-center font-bold "
            type="text"
            placeholder="#100"
          />
          <input
            className="w-[200px] py-4 px-3 border-[3px] rounded-full text-center font-bold"
            type="text"
            placeholder="#500"
          />
          <input
            className="w-[200px] py-4 px-3 border-[3px] rounded-full text-center font-bold"
            type="text"
            placeholder="#1000"
          />
        </div>
        <div className="space-x-[40px]">
          {" "}
          <input
            className="w-[200px] py-4 px-3 border-[3px] rounded-full text-center font-bold"
            type="text"
            placeholder="#2000"
          />
          <input
            className="w-[200px] py-4 px-3 border-[3px] rounded-full text-center font-bold"
            type="text"
            placeholder="#5000"
          />
          <input
            className="w-[200px] py-4 px-3 border-[3px] rounded-full text-center font-bold"
            type="text"
            placeholder="#10,000"
          />
        </div>
        <div className="grid">
          {" "}
          <label className="pb-3 font-semibold" htmlFor="">
            Amount
          </label>
          <input
            className="w-[700px] py-4 px-3 border-[3px] rounded-full"
            type="text"
          />
        </div>
        <div className="grid">
          {" "}
          <label className="pb-3 font-semibold" htmlFor="">
            Save Beneficiary
          </label>
          <input
            className="w-[700px] py-4 px-3 border-[3px] rounded-full text-center font-bold"
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

export default Airtime;

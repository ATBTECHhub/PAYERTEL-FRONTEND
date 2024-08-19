import React from "react";
import { GoDownload } from "react-icons/go";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { PiBellSimpleRingingBold } from "react-icons/pi";
import { FaCirclePlus } from "react-icons/fa6";
import { bundle, foot, leg } from "../constant/data";
import { IoMdArrowDropdown } from "react-icons/io";

const Cash = () => {
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

      <h1 className="font-semibold text-[45px] text-center m-11">
        Airtime To Cash
      </h1>
      <p className="font-semibold text-[24px] m-3 text-center">
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
      <div className="py-[50px] w-[50%] mx-auto space-y-8">
        <div className="grid">
          {" "}
          <label className="pb-3 font-semibold" htmlFor="">
            Payment Method
          </label>
          <input
            className="shadow appearance-none border-[3px] rounded-full w-[800px] py-3 px-3 leading-tight focus:outline-none focus:shadow-outline bg-[#E7E7E7]"
            type="text"
          />
          <i className="absolute pt-14 pl-[700px]">
            {" "}
            <IoMdArrowDropdown className="w-[25px] h-4" />
          </i>
        </div>
        <div className="grid">
          {" "}
          <label className="pb-3 font-semibold" htmlFor="">
            Phone Number
          </label>
          <input
            className="shadow appearance-none border-[3px] rounded-full w-[800px] py-3 px-3 leading-tight focus:outline-none focus:shadow-outline bg-[#E7E7E7]"
            type="text"
          />
        </div>
        <div className="grid">
          {" "}
          <label className="pb-3 font-semibold text-sm" htmlFor="">
            Save as beneficiary
          </label>
          <div className="absolute pl-48 pb">
            {" "}
            <MdOutlineCheckBoxOutlineBlank />
          </div>
          <input
            className="shadow appearance-none border-[3px] rounded-full w-[800px] py-3 px-3 leading-tight focus:outline-none focus:shadow-outline bg-primary text-center text-stone-50 font-semibold"
            type="text"
            placeholder="continue"
          />
        </div>
      </div>
      <div className=" pl-6 bg-primary py-6 px-8 ">
        <div className="flex space-x-[126px]">
          {foot.map((item, i) => (
            <div dangerouslySetInnerHTML={{ __html: item.image }} />
          ))}
          <div className="block text-white">
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
          <div className="block text-white">
            {" "}
            <h3 className="font-medium text-xl">Services</h3>
            <ul className="text-base w-[285px] leading-8">
              <li>Data Bundle Purchase</li>
              <li>Airtime Top-Ups</li>
              <li>Airtime to Cash Conversion</li>
              <li>Cable Network Subscription</li>
            </ul>
          </div>
          <div className="flex items-center">
            <a className="bg-white py-3 px-6 rounded-lg" href="">
              Start Today{" "}
            </a>
          </div>
        </div>
        <div className=" py-[60px]">
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

export default Cash;

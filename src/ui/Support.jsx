import React from "react";
import { help } from "../constant/data";
import { TbPhonePause } from "react-icons/tb";
import { IoIosMailUnread } from "react-icons/io";

const Support = () => {
  return (
    <section className="flex container gap-[35px] py-[120px]  lg:py-[150px]">
      <div className="lg:w-1/2">
        <img className="w-full  object-cover" src="/image/customer.png" alt="" />
      </div>
      <div className="py-10 lg:w-1/2">
        {" "}
        <h1 className="text-[32px] leading-[40px] font-semibold text-primary lg:text-[40px] lg:leading-[48px]">
          Customer support
        </h1>
        <h2 className="w-[633px]  text-[28px] leading-[40px] lg:text-35px] lg:leading-[40px] font-semibold py-10">
          We Are Here To Assist You With Any Enquiries.
        </h2>
        <div className="lg:py-[130px]  flex gap-[70px] py-80">
          {" "}
          <div>
            {" "}
            <div className="pl-16 mb-2">
              {" "}
              <TbPhonePause className="w-[50px] h-[50px]" />
            </div>
            <h3 className="lg:w-[199px] text-center text-primary font-semibold">
              Phone Number
            </h3>
            <p className="text-center mt-2">07053467892</p>
          </div>
          <div className="">
            <div className="pl-16 mb-2">
              {" "}
              <IoIosMailUnread className="w-[50px] h-[50px]" />
            </div>
            <h3 className="text-center text-primary font-semibold">E-mail</h3>
            <p className="mt-2">trypayertel@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;

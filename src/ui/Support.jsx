import React from "react";
import { help } from "../constant/data";
import { TbPhonePause } from "react-icons/tb";
import { IoIosMailUnread } from "react-icons/io";

const Support = () => {
  return (
    <section className="flex container gap-[35px] py-[120px]">
      <div className="w-[638px] h-[521px]">
        <img src="/image/customer.png" alt="" />
      </div>
      <div className="py-10">
        {" "}
        <h1 className="w-[400px] h-[49px] text-[40px] leading-[48px] font-semibold text-primary">
          Customer support
        </h1>
        <h2 className="w-[633px]  text-[35px] leading-[48px] font-semibold py-10">
          We Are Here To Assist You With Any Enquiries.
        </h2>
        <div className="py-[130px]  flex gap-[70px] ">
          {" "}
          <div>
            {" "}
            <div className="pl-16 mb-2">
              {" "}
              <TbPhonePause className="w-[50px] h-[50px]" />
            </div>
            <h3 className="w-[199px] text-center text-primary font-semibold">Phone Number</h3>
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

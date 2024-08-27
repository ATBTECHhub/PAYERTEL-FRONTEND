import { BsCashCoin } from "react-icons/bs";
import { IoMdDesktop } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosWifi } from "react-icons/io";
import React from "react";
import { services } from "../constant/data";

const Values = () => {
  return (
    <section className="container text-center pt-[165px] pb-[142px]">
      <div>
        <h2 className="pt-8 lg:text-[64px] font-bold leading-[78px] text-[24px] lg:mb-12 mb-8">
          Our Awesome $ Unique Feature <br /> Services
        </h2>
      </div>
      <div className="justify-center flex lg:px-12 px-4">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-[36px] lg:py-[125px] md:py-12 py-8">
          {services.map((item, i) => (
            <div key={i} className=" md:px-8 px-4 flex flex-col items-center h-[500px] md:h-auto text-center">
              <div className="bg-primary  md:w-[150px] w-[100px]  md:h-[150px] h-[100px] rounded-full flex justify-center items-center md:mt-8 mt-4">
                <img
                  className="w-8 h-7 md:w-[100px] md:h-[70px]"
                  src={item.image}
                  alt={item.heading}
                />
              </div>
              <h3
                className=" md:py-8 py-4  md:text-[32px] text-[24px] font-semibold"
                dangerouslySetInnerHTML={{ __html: item.heading }}
              />
              <p className="text-xl leading-8 pb-[31px] lg:w-[276px] md:w-full w-full">
                {item.para}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;


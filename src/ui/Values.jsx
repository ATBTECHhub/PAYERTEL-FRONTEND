import { BsCashCoin } from "react-icons/bs";
import { IoMdDesktop } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosWifi } from "react-icons/io";
import React from "react";
import { services } from "../constant/data";

const Values = () => {
  return (
    <section className="container text-center">
      <div> 
        <h2 className=" pt-8 lg:text-[64px] font-bold leading-[78px] text-[40px] ">
          Our Awesome $ Unique Feature <br /> Services
        </h2>
      </div>
      <div className="justify-center flex">
        <div className="grid lg:grid-cols-2 items-center gap-[36px] py-[125px]">
          {services.map((item, i) => (
            <div className="px-[90px] flex flex-col items-center h-[500px] text-center">
              <div className="bg-primary w-[200px] h-[200px] rounded-full flex justify-center items-center mt-[31px]">
                {" "}
                <div dangerouslySetInnerHTML={{ __html: item.image }} />
              </div>
              <h3
                className="py-[27px] text-[40px] font-semibold"
                dangerouslySetInnerHTML={{ __html: item.heading }}
              />
              <p className="text-xl leading-8 pb-[31px] lg:w-[276px]">{item.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;

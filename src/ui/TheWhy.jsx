import React from 'react'
import { RiCustomerService2Fill } from "react-icons/ri";
import { SiSpeedypage } from "react-icons/si";
import { FaUserCheck } from "react-icons/fa6";
import { GiClick } from "react-icons/gi";
import { utilities } from '../constant/data';

const TheWhy = () => {
  return (
    <section className="text-center container bg-primary py-12 lg:py-20">
      <h1 className=" lg:text-[64px] font-bold leading-[78px] text-[40px] text-white mb-12 lg:mb-20">
        Why Choose Us?
      </h1>
      <div className="grid lg:grid-cols-2 items-center md:grid-cols-1 gap-12 lg:gap-[62px] py-12 lg:py-[112px]">
        {utilities.map((item, i) => (
          <div className="items-center flex flex-col  rounded-2xl bg-slate-50 text-left py-8 lg:py-[50px] w-full lg:w-[450px] mx-auto ">
            <div className="pl-80">
              <div dangerouslySetInnerHTML={{ __html: item.image }} />
            </div>
            <h3 className="font-semibold leading-[45px] lg:h-[100px] text-primary text-[32px] lg:text-[40px]  lg:w-[370px]  mb-4 lg:mb-8">
              {item.heading}
            </h3>
            <p className="font-normal text-xl leading-8 lg:w-[370px] lg:h-[170px] mb-8 lg:mb-12">
              {item.para}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TheWhy
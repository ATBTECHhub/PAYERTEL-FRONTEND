import React from 'react'
import { RiCustomerService2Fill } from "react-icons/ri";
import { SiSpeedypage } from "react-icons/si";
import { FaUserCheck } from "react-icons/fa6";
import { GiClick } from "react-icons/gi";
import { utilities } from '../constant/data';

const TheWhy = () => {
  return (
    <section className="text-center container bg-primary">
      <h1 className=" lg:text-[64px] font-bold leading-[78px] text-[40px] text-white">
        Why Choose Us?
      </h1>
      <div className="grid lg:grid-cols-2 items-center gap-[62px] py-[112px]">
        {utilities.map((item, i) => (
          <div className="items-center flex flex-col  rounded-2xl bg-slate-50 py-[50px] w-[450px] mx-auto  text-left">
            <div className="pl-80">
              <div dangerouslySetInnerHTML={{ __html: item.image }} />
            </div>
            <h3 className="font-semibold text-[40px] leading-[45px] lg:w-[370px]  lg:h-[100px] text-primary">
              {item.heading}
            </h3>
            <p className="font-normal text-xl leading-8 lg:w-[370px] lg:h-[170px]">
              {item.para}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TheWhy
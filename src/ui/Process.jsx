import React from "react";
import { flow } from "../constant/data";

const Process = () => {
  return (
    <section className="container text-center py-[100px]">
      <h1 className="font-bold text-[40px] lg:text-[64px] text-primary">
        How It Works
      </h1>
      <div className="grid">
        {flow.map((item, i) => (
          <div className="py-[68px] px-[32px] ">
            <div className="w-9 h-9  pt-12  ">
              <div dangerouslySetInnerHTML={{ __html: item.image }} />
            </div>

            <div className=" text-left ">
              <h3 className=" h-[60px] font-bold text-[32px] px-8 pl-28 text-primary">
                {item.heading}
              </h3>
              <p className="w-[553px]  font-normal text-xl leading-8 px-8  pl-28 ">
                {item.para}
              </p>
            </div>
          </div>
        ))}
        <img className="w-[700px] h-[700px]" src="../image/frame.png" alt="" />
      </div>
    </section>
  );
};

export default Process;

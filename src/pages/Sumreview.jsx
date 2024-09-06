import React from "react";
import { IoCloseCircle } from "react-icons/io5";
const Sumreview = () => {
  return (
   
      <section className="translate-y-1/4 ">
        <div className="mx-auto w-[90%] border px-5 py-2 rounded-3xl bg-slate-100 xl:w-[20%] md:w-[40%] lg:w-[30%]">
          <div className="pl-60 absolute text-primary">
            <IoCloseCircle />
          </div>
          <h1 className="font-bold text-base text-center">Review Summary</h1>
          <div className="space-y-6 py-6">
            <div className="flex items-center justify-between">
              <h1 className="text-sm font-semibold">Code</h1>
              <span className="text-xs font-normal">6563546</span>
            </div>
            <div className="flex items-center  justify-between">
              <h1 className="text-sm font-semibold">Amount</h1>
              <span className="text-xs font-normal">#1000.00</span>
            </div>
            <div className="flex items-center  justify-between">
              <h1 className="text-sm font-semibold">Recipient</h1>
              <span className="text-xs font-normal">0908734526</span>
            </div>
            <div className="flex items-center  justify-between">
              <h1 className="text-sm font-semibold">Package</h1>
              <span className="text-xs font-normal">MTN 2GB CG 30days</span>
            </div>
            <div className="flex items-center  justify-between">
              <h1 className="text-sm font-semibold">Date</h1>
              <span className="text-xs font-normal">Sept 6, 2024, 1am</span>
            </div>
          </div>
          <div className="grid space-y-3 py-11 translate-y-8">
            <button className="border px-4 py-1 rounded-lg text-sm bg-primary text-white">
              Pay Now
            </button>
            <button className="border px-4 py-1 rounded-lg text-sm bg-red-500 text-white">
              Cancel
            </button>
          </div>
        </div>
      </section>
    
  );
};

export default Sumreview;

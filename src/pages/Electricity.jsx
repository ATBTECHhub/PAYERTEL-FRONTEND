import React from 'react'
import { PiBellSimpleRingingBold } from "react-icons/pi";
import { IoEyeSharp } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import { bundle, foot, leg, power, provide } from "../constant/data";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import Footer from "../ui/Footer";
import { MdArrowBackIos } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";



const Electricity = () => {
  return (
    <main>
      <section className="max-w-screen-2xl mx-auto">
        <div className="primary-gradient">
          <nav className="flex justify-between items-center container lg:py-10 py-5 pb-20">
            <div className="flex items-center gap-4">
              <img
                className="lg:w-20 lg:h-20 w-10 h-10"
                src="/image/dash.png"
                alt=""
              />
              <div className="grid lg:pb-3 pb-1 text-white">
                {" "}
                <h1 className="lg:text-lg text-xs">Welcome!</h1>
                <p className="lg:text-sm text-xs">Dee-zigi</p>
              </div>
            </div>
            <div className="text-white">
              {" "}
              <PiBellSimpleRingingBold className="lg:w-8 lg:h-10 w-4 h-5 " />
            </div>
          </nav>
          <div className='bg-white rounded-t-3xl'>
            <div className="space-y-3  mx-auto text-center py-5 border rounded-3xl w-[80%] primary-gradient border-slate-100 md:w-[55%] lg:w-[40%] xl:w-[30%] -translate-y-6">
              <div>
                <p className="font-normal text-xs text-white md:text-base xl:text-xl">
                  Total Balance
                </p>
              </div>
              <div className="flex items-center gap-3 pl-[72px]">
                <p className="font-bold text-xs text-white md:text-xl xl:text-3xl md:pl-[55px] xl:pl-7">
                  NGN 600,000
                </p>
                <FaEye className="w-3 h-3 text-white" />
              </div>
              <div className="flex py-3 pl-16 items-center space-x-1 md:pl-32 xl:pl-[130px]">
                <button class="btn text-xs font-semibold border px-6 py-1 rounded-full text-primary bg-white md:py-1 md:px-8 md:text-base">
                  <i class=""></i> fund wallet
                </button>
                <div className="absolute pl-24 md:pl-32 ">
                  <FaCirclePlus className="w-3 h-3 text-primary md:w-5 md:h-5" />
                </div>
              </div>
            </div>

            <div className="flex items-center ">
              <div className="xl:pl-52 xl:m-10 lg:pl-32 lg:m-6 md:m-4 md:pl-11 pl-3 m-2">
                <button
                  className="md:text-sm lg:text-sm xl:text-sm text-[8px] border md:px-5 md:py-1 lg:px-5 lg:py-1 xl:px-5 xl:py-1 px-3 py-1 rounded-md bg-primary text-white"
                  type="submit"
                >
                  Dashboard
                </button>
              </div>
              <div className="absolute xl:pl-64 lg:pl-40 md:pl-16 pl-6 pt-1 text-white md:pb-1">
                <MdArrowBackIos className="md:w-3 md:h-3 lg:w-3 lg:h-3 xl:w-3 xl:h-3 w-2 h-2" />
              </div>
            </div>
            <h1 className="font-bold text-center py-12 md:text-2xl lg:text-3xl text-primary -translate-y-10">
              Electricity
            </h1>
            <p className="font-semibold text-xs pl-14 md:text-sm md:pl-56 lg:text-base lg:pl-72 xl:pt-7 xl:pl-96 -translate-y-16">
              Select Network
            </p>
            <div className="flex mx-auto w-[70%] py-5 space-x-5 md:w-[45%] md:space-x-10 lg:space-x-20 lg:py-8 xl:space-x-32 xl:w-[50%] -translate-y-16">
              {power.map((item, i) => (
                <img
                  className=" h-10 w-10 md:h-14 md:w-14 xl:w-20 xl:h-20"
                  src={item.image}
                  alt=""
                />
              ))}
            </div>
            <div className="space-y-8 -translate-y-14 md:space-y-14">
              <div className="flex items-center">
                <div className="mx-auto w-[85%] space-y-2 md:w-[60%] xl:w-[55%]">
                  <label
                    className="text-xs font-bold md:text-base "
                    htmlFor=""
                  >
                    Payment Method
                  </label>
                  <input
                    className="py-1 px-10 border-2 rounded-lg  md:py-2 md:px-32 bg-slate-200 lg:px-52 xl:px-72  focus:outline-none"
                    type="number"
                  />
                </div>
                <div className="absolute xl:pl-[1060px] pt-9 lg:pl-[760px] md:pl-[550px] pl-64">
                  <IoMdArrowDropdown className="xl:w-10 xl:h-10 lg:w-9 lg:h-9 md:w-9 md:h-3 w-6 h-6" />
                </div>
              </div>
              <div className="mx-auto w-[85%] space-y-2 md:w-[60%] xl:w-[55%]">
                <label
                  className="text-xs font-bold md:text-base "
                  htmlFor=""
                >
                  Phone Number
                </label>
                <input
                  className="py-1 px-10 border-2 rounded-lg  md:py-2 md:px-32 bg-slate-200 lg:px-52 xl:px-72 focus:outline-none"
                  type="number"
                />
              </div>
            </div>

            <div className="mx-auto w-[90%] md:py-14 md:w-[60%] xl:w-[55%] -translate-y-8">
              <div className="items-center flex gap-6 mb-6">
                <label
                  className="text-xs font-bold md:text-base"
                  htmlFor="checkbox"
                >
                  Save as beneficiary
                </label>
                <input
                  id="checkbox"
                  className="cursor-pointer rounded-md border-2 border-blue-gray-200 focus:outline-none"
                  type="checkbox"
                />
              </div>
              <div className="mx-auto w-[30%] md:w-[20%] lg:w-[10%]">
                <button
                  type="submit"
                  className="py-1 border rounded-lg text-white font-bold text-xs primary-gradient px-3 xl:py-2 xl:px-4"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Electricity
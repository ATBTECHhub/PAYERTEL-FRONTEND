import React from 'react'
import { PiBellSimpleRingingBold } from "react-icons/pi";
import { FaCirclePlus } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import Footer from "../ui/Footer";
import { board } from '../constant/data';
import { BsEmojiFrown } from "react-icons/bs";




const User = () => {
  return (
    <main>
      <section className="max-w-screen-2xl mx-auto primary-gradient">
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
        <div className="bg-white rounded-t-3xl">
          <div className="space-y-3  mx-auto text-center py-5 border rounded-3xl w-[80%] primary-gradient border-slate-100 md:w-[55%] lg:w-[40%] xl:w-[30%] -translate-y-6">
            <div>
              <p className="font-normal text-xs text-white md:text-base">
                Total Balance
              </p>
            </div>

            <div className="flex items-center gap-2 pl-20">
              <p className="font-bold text-xs text-white md:text-xl md:pl-[53px] xl:pl-[70px]">
                NGN 600,000
              </p>
              <FaEye className="w-3 h-3 text-white" />
            </div>

            <div className="flex py-3 pl-[68px] items-center space-x-1 md:pl-32 xl:pl-[145px]">
              <button class="btn text-xs font-semibold border px-6 py-0.5 rounded-full text-primary bg-white md:py-1 md:px-8 md:text-base">
                <i class=""></i> fund wallet
              </button>
              <div className="absolute pl-24 md:pl-32 ">
                <FaCirclePlus className="w-3 h-3  text-primary md:w-4 md:h-4" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 py-6 gap-6 w-[75%] mx-auto space-y-1 space-x-4 md:grid-cols-3 lg:grid-cols-5">
            {board.map((item, i) => (
              <div className=" border object-cover grid place-items-center border-slate-200 shadow-xl rounded-3xl py-4">
                <img className=" h-10 w-10 xl:h-16 xl:w-16" src={item.image} alt="" />
                <div className="text-center ">
                  <h3 className="font-bold text-[8px] lg:text-base md:text-base">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mx-auto w-[80%] py-5">
            <a className="text-[10px] font-bold md:text-sm" href="">
              Transanction History
            </a>
            <a className="text-[10px] font-bold md:text-sm" href="">
              See all
            </a>
          </div>
          <div className="space-y-3 py-20 border mx-auto rounded-3xl w-[85%] bg-slate-200 lg:py-52 md:py-48">
            <div className='mx-auto w-[10%] translate-y-9 md:translate-y-28 md:w-[5%]'>
              <BsEmojiFrown />
            </div>
            <p className="text-[10px] text-center translate-y-7 md:text-sm md:translate-y-28">
              oops!, you are yet to use any of our products.
            </p>

            <div className="flex mx-auto w-[82.5%] gap-3 translate-y-16 md:translate-y-44 md:w-[86.5%] lg:w-[65%] xl:w-[45%]">
              <img
                className="w-30 h-6 md:w-50 md:h-16"
                src="/image/airtelcard.png"
                alt=""
              />
              <img
                className="w-35 h-6 md:w-50 md:h-16"
                src="/image/pmobilecard.png"
                alt=""
              />
            </div>
            <div className="flex mx-auto gap-3 w-[82.5%] translate-y-16 md:translate-y-44 md:w-[86.5%] lg:w-[65%] xl:w-[45%]">
              <img
                className="w-30 h-6 md:w-50 md:h-16"
                src="/image/glocard.png"
                alt=""
              />
              <img
                className="w-30 h-6 md:w-50 md:h-16"
                src="/image/mtncard.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default User
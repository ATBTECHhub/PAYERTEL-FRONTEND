import React from 'react'
import { PiBellSimpleRingingBold } from "react-icons/pi";
import { IoMdArrowDropleft } from "react-icons/io";
import Footer from "../ui/Footer";

const Profile = () => {
  return (
    <main>
      <section className="primary-gradient">
        <nav className="flex justify-between items-center container lg:py-10 py-5">
          <div className="flex items-center gap-4">
            <img
              className="lg:w-20 lg:h-20 w-10 h-10 md:w-16 md:h-16"
              src="/image/dash.png"
              alt=""
            />
            <div className="grid lg:pb-3 pb-1 text-white">
              {" "}
              <h1 className="lg:text-lg text-xs">Welcome!</h1>
              <p className="lg:text-sm text-xs">Dee-zigi</p>
            </div>
          </div>
          <div className='text-white'>
            {" "}
            <PiBellSimpleRingingBold className="lg:w-8 lg:h-8 w-4 h-4" />
          </div>
        </nav>
        <div className='bg-white rounded-t-3xl'>
          <div className="lg:py-32 container items-center py-9">
            <div className="flex items-center">
              <a
                className="lg:px-9 lg:py-1 border  text-xs lg:text-lg px-3 rounded-lg bg-primary text-white"
                href=""
              >
                Back
              </a>
              <i className="absolute text-white">
                {" "}
                <IoMdArrowDropleft />
              </i>
            </div>
            <div className="">
              {" "}
              <h1 className="font-bold lg:text-xl text-primary text-center text-xs">
                Settings
              </h1>
            </div>
          </div>
          <div className="lg:text-center lg:space-x-3.5 lg:flex-none lg:container-none text-xs space-x-3 container md:w-[30%] lg:w-[50%]">
            <a
              className="lg:px-10 lg:py-3 border lg:rounded-xl text-xs lg:text-lg px-3 rounded-lg font-medium py-2 bg-primary text-white "
              href=""
            >
              Profile
            </a>
            <a
              className="lg:px-10 lg:py-3 border lg:rounded-xl text-xs lg:text-lg px-3 rounded-lg font-medium py-2 bg-slate-100"
              href=""
            >
              Password
            </a>
            <a
              className="lg:px-10 lg:py-3 border lg:rounded-xl text-xs lg:text-lg px-3 rounded-lg font-medium py-2  bg-slate-100"
              href=""
            >
              Verification
            </a>
          </div>
          <div className="lg:py-16 lg:w-[5%] mx-auto py-10 w-[15%] md:w-[5%]">
            <img className=" lg:w-16 lg:h-16" src="/image/dash.png" alt="" />
          </div>
          <div className="lg:py-8 lg:w-[35%] mx-auto lg:space-y-14 container space-y-7">
            <div className="grid lg:space-y-4 space-y-2">
              <label
                className="lg:text-xl font-semibold text-primary text-xs"
                htmlFor=""
              >
                Name
              </label>
              <input
                className="border  bg-slate-100 px-6 lg:py-2 rounded-lg text-xs py-2 focus:outline-none"
                type="text"
                placeholder="Ademola Orimogunje"
              />
            </div>
            <div className="grid lg:space-y-4 space-y-2">
              <label
                className="lg:text-xl font-semibold text-primary text-xs "
                htmlFor=""
              >
                Email address
              </label>
              <input
                className="border  bg-slate-100 px-6 lg:py-2 rounded-lg py-2 text-xs focus:outline-none"
                type="email"
                placeholder="example@email.com"
              />
            </div>
          </div>

          <div className="mx-auto w-[20%] md:w-[10%] lg:w-[10%] m-10">
            <button
              type="submit"
              className="py-1 border rounded-lg text-white font-bold text-xs primary-gradient px-3 xl:py-1.5 xl:px-6"
            >
              Save
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Profile
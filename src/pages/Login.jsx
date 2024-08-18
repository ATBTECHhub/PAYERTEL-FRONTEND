import React from 'react'
import { log } from '../constant/data';
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import { PiEyeSlashThin } from "react-icons/pi";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";


const Login = () => {
  return (
    <section className="space-y-8">
      <div className=" container">
        {" "}
        <h1 className="w-[438px] font-semibold text-[40px]">Welcome Back.</h1>
        <p>
          Already have an account?{" "}
          <a className="text-primary font-medium" href="">
            Sign up
          </a>
        </p>
        <form className="space-y-8">
          <div className="grid">
            {" "}
            <label className="pb-3" htmlFor="">
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded-2xl w-[400px] py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type="Email"
              placeholder="Example@gmail.com"
            />
          </div>
          <div className="grid">
            {" "}
            <label className="pb-3" htmlFor="">
              Password
            </label>{" "}
            <div className="flex">
              {" "}
              <input
                className="shadow appearance-none border rounded-2xl w-[400px] py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="********"
              />
              <i className="absolute pl-80 pt-3">
                <PiEyeSlashThin />
              </i>
            </div>
          </div>
          <div className='py-3'>
            {" "}
            <a href="">Forgotten Password?</a>
          </div>
          <div className=" border rounded-2xl w-[400px] py-3 px-3 leading-tight text-center bg-primary ">
            {" "}
            <a className="w-[80px] font-semibold text-xl text-white" href="">
              Login
            </a>
          </div>

          {log.map((item, i) => (
            <div dangerouslySetInnerHTML={{ __html: item.image }} />
          ))}
          <div className="flex items-center gap-8 pl-32">
            {" "}
            <FcGoogle className="w-[50px] h-[50px]" />
            <IoLogoApple className="w-[50px] h-[50px]" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login
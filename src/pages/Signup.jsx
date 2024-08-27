import React from "react";
import { PiEyeSlashThin } from "react-icons/pi";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { log } from "../constant/data";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import { Axios } from "../config";
import Request from "../lib/request";
import { SignupSchema } from "../schemas/indexs";
import { useFormik } from "formik";
import { foot, leg } from "../constant/data";
import { FaLongArrowAltRight } from "react-icons/fa";

const Signup = () => {
  const initialValues = {
    fullname: "",
    email: "",
    password: "",
  };
  const onSubmit = async (payload, actions) => {
    try {
      const response = await Axios.post(Request.signup, payload);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };
  const {
    handleChange,
    values,
    handleBlur,
    handleSubmit,
    isSubmitting,
    errors,
    touched,
  } = useFormik({
    initialValues,
    validationSchema: SignupSchema,
    onSubmit,
  });
  const getError = (key) => {
    return touched[key] && errors[key];
  };
  return (
    <section className="">
      <div className="flex space-x-96 w-[65%] mx-auto translate-y-2">
        <div className="py-10">
          {" "}
          <h1 className=" font-semibold text-3xl">Create Your Account.</h1>
          <div className="pl-8">
            {" "}
            <p className="text-sm">
              Already have an account?{" "}
              <a className="text-primary font-medium" href="">
                Sign in
              </a>
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-8 py-4">
            <div className="grid">
              {" "}
              <label className="pb-3 text-base font-medium" htmlFor="fullname">
                Full Name
              </label>
              <input
                // className="shadow appearance-none border rounded-2xl w-[400px] py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="fullname"
                name="fullname"
                value={values.fullname}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`shadow appearance-none border rounded-2xl w-96 py-3 px-2 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.fullname && touched.fullname
                    ? "border border-red-500"
                    : ""
                }`}
                type="text"
                placeholder="Steven Stallion"
              />
              <p className="text-red-500 text-sm font-medium">
                {getError("fullname")}
              </p>
            </div>
            <div className="grid">
              {" "}
              <label className="pb-3 text-base font-medium" htmlFor="">
                Email Address
              </label>
              <input
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                id="Email address"
                name="Email address"
                className="shadow appearance-none border rounded-2xl w-96 py-3 px-2 leading-tight focus:outline-none focus:shadow-outline"
                type="Email"
                placeholder="Example@gmail.com"
              />
            </div>
            <div className="grid">
              {" "}
              <label className="pb-3 text-base font-medium" htmlFor="">
                Password
              </label>{" "}
              <div className="flex">
                {" "}
                <input
                  className="shadow appearance-none border rounded-2xl w-96 py-3 px-2 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="********"
                />
                <i className="absolute pl-80 pt-3">
                  <PiEyeSlashThin />
                </i>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {" "}
              <input
                className="h-5 w-5 cursor-pointer rounded-md border-2 border-blue-gray-200 focus:outline-none"
                type="check box"
              />
              <p>I agree to the terms and conditions</p>
            </div>
            <div className=" border rounded-2xl w-96 py-3 px-2 leading-tight text-center bg-primary ">
              {" "}
              <a className=" font-semibold text-base text-white" href="">
                Sign Up
              </a>
            </div>

            {log.map((item, i) => (
              <div dangerouslySetInnerHTML={{ __html: item.image }} />
            ))}
            <div className="flex items-center gap-8 pl-36 ">
              {" "}
              <div className="border-b-4 border-x-1 px-2 py-1 rounded-b-lg">
                <FcGoogle className="w-6 h-6 " />
              </div>
              <div className="border-b-4 border-x-1 px-2 py-1 rounded-b-lg">
                <IoLogoApple className="w-6 h-6" />
              </div>
            </div>
          </form>
        </div>
        <div className="absolute">
          {" "}
          <img className="w-[649px] h-[649px]" src="/image/handp.png" alt="" />
        </div>
      </div>

      <div className=" pl-6 py-10 px-8 lg:px-20 bg-blue-950">
        <div className="flex space-x-[160px]">
          {foot.map((item, i) => (
            <div dangerouslySetInnerHTML={{ __html: item.image }} />
          ))}
          <div className="block text-white">
            {" "}
            <h2 className="font-medium text-xl">Useful Links</h2>
            <ul className="text-base w-[188px] leading-7">
              <li>Home</li>
              <li>About Us</li>
              <li>How It Works</li>
              <li>Testimonials</li>
              <li>Contacts</li>
            </ul>
          </div>
          <div className="block text-white">
            {" "}
            <h3 className="font-medium text-xl">Services</h3>
            <ul className="text-base w-[285px] leading-8">
              <li>Data Bundle Purchase</li>
              <li>Airtime Top-Ups</li>
              <li>Airtime to Cash Conversion</li>
              <li>Cable Network Subscription</li>
            </ul>
          </div>
          <div className=" items-center flex ">
            <a className="bg-white py-3 px-8 rounded-lg" href="">
              Start Today{" "}
            </a>
            <i className="absolute pl-32">
              <FaLongArrowAltRight className="w-3 h-3" />
            </i>
          </div>
        </div>
        <div className=" py-[60px]">
          {" "}
          <hr />
        </div>
        <div className="flex items-center">
          {leg.map((item, i) => (
            <div className="flex space-x-[60px] text-white">
              {" "}
              <div dangerouslySetInnerHTML={{ __html: item.image }} />
              <h3>{item.heading1}</h3>
              <h3>{item.heading2}</h3>
              <h3>{item.heading3}</h3>
              <h3>{item.heading4}</h3>
              <div>
                {" "}
                <div dangerouslySetInnerHTML={{ __html: item.logo }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Signup;

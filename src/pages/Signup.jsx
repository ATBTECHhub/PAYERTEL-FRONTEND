import React, { useState } from "react";
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
import { IoMdEye } from "react-icons/io";
import { toast } from "react-toastify";
import Footer from "../ui/Footer";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const initialValues = {
    name: "",
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
    <main>
      <section className="h-screen overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
          <div className="relative flex flex-col justify-center items-center px-4 py-10">
            <img
              className="top-0 left-1/2 absolute w-48 sm:w-72 md:w- -translate-x-1/2"
              src="/image/auth-ellipse-top.png"
              alt=""
            />
            <img
              className="bottom-0 left-0 absolute w-32 sm:w-48 md:w- translate-y-3/4"
              src="/image/auth-ellipse-lconer.png"
              alt=""
            />
            <div className=" lg:text-start text-center">
              <h1 className=" font-bold md:text-3xl lg:text-2xl text-xl">
                Create Your Account.
              </h1>
              <div className="pl-3 pt-2">
                <p className="text-sm">
                  Already have an account?{" "}
                  <a className="text-primary font-medium" href="">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-8 py-8">
              <div className="grid">
                {" "}
                <label className="pb-3 text-sm font-bold" htmlFor="fullname">
                  Full Name
                </label>
                <input
                  id="fullname"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`shadow appearance-none border rounded-2xl lg:w-96 md:py-3 md:w-96 lg:py-3 py-2 w-72 px-1 text-xs leading-tight focus:outline-none focus:shadow-outline ${
                    errors.name && touched.name ? "border border-red-500" : ""
                  }`}
                  type="text"
                  placeholder="Steven Stallion"
                />
                <p className="text-red-500 text-sm font-medium">
                  {getError("name")}
                </p>
              </div>
              <div className="grid">
                {" "}
                <label className="pb-3 text-sm font-bold" htmlFor="email">
                  Email Address
                </label>
                <input
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="email"
                  name="email"
                  className={`shadow appearance-none border rounded-2xl lg:w-96 lg:py-3 md:py-3 md:w-96 w-72 py-2 px-2 text-xs leading-tight focus:outline-none focus:shadow-outline ${
                    errors.email && touched.email ? "border border-red-500" : ""
                  }`}
                  type="email"
                  placeholder="Example@gmail.com"
                />
                <p className="text-red-500 text-sm font-medium">
                  {getError("email")}
                </p>
              </div>
              <div className="grid">
                {" "}
                <label className="pb-3 text-sm font-bold " htmlFor="password">
                  Password
                </label>{" "}
                <div className="flex flex-col">
                  {" "}
                  <input
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="password"
                    name="password"
                    className={`shadow appearance-none border lg:text-xs rounded-2xl lg:w-96 lg:py-3 md:w-96 md:py-3 py-2 w-72 px-2 lg:pl-2 leading-tight focus:outline-none focus:shadow-outline ${
                      errors.password && touched.password
                        ? "border border-red-500"
                        : ""
                    }`}
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                  />
                  <p className="text-red-500 text-sm font-medium">
                    {getError("password")}
                  </p>
                  <div className="absolute pt-3 lg:pl-80 md:pl-80 pl-64">
                    {showPassword ? (
                      <IoMdEye onClick={togglePasswordVisibility} />
                    ) : (
                      <PiEyeSlashThin onClick={togglePasswordVisibility} />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {" "}
                <input
                  id="checkbox"
                  className="h-5 w-5 cursor-pointer rounded-md border-2 border-blue-gray-200 focus:outline-none"
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
                <label className="text-xs" htmlFor="checkbox">
                  I agree to the terms and conditions
                </label>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className=" border rounded-2xl lg:w-96 lg:py-3 md:w-96 md:py-3 w-72 py-2 leading-tight text-center bg-primary font-semibold text-sm text-white disabled:opacity-75 disabled:cursor-not-allowed"
              >
                Sign Up
              </button>

              {log.map((item, i) => (
                <div
                  className="md:pl-9 lg:pl-9"
                  key={i}
                  dangerouslySetInnerHTML={{ __html: item.image }}
                />
              ))}
              <div className="flex  gap-8 pl-24 md:pl-32 lg:pl-32">
                <div className="border-b-4 border-x-1 px-2 py-1 rounded-b-lg">
                  <FcGoogle className="w-6 h-6 " />
                </div>
                <div className="border-b-4 border-x-1 px-2 py-1 rounded-b-lg">
                  <IoLogoApple className="w-6 h-6" />
                </div>
              </div>
            </form>
          </div>
          <div className="lg:block hidden 2xl:pt-20 primary-gradient">
            <img
              className="2xl:hidden w-full h-full"
              src="/image/herohand-3.png"
              alt=""
            />
            <img
              className="2xl:inline-block hidden w-full h-full"
              src="/image/herohand.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Signup;

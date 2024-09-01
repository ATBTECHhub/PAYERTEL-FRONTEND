import React, { useState } from "react";
import { log } from "../constant/data";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import { PiEyeSlashThin } from "react-icons/pi";
import { Axios } from "../config";
import Request from "../lib/request";
import { LoginSchema } from "../schemas/indexs";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { IoMdEye } from "react-icons/io";
import Footer from "../ui/Footer";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = async (payload, actions) => {
    try {
      const response = await Axios.post(Request.login, payload);
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
    validationSchema: LoginSchema,
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
            <div className="text-center lg:text-start">
              <h1 className="pb-2 font-bold text-2xl">Welcome Back.</h1>
              <p className="pt-3 text-sm">
                Already have an account?
                <a className="font-medium text-primary" href="">
                  Sign up
                </a>
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-8 py-8">
              <div className="grid">
                <label className="pb-3 font-bold text-sm" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Example@gmail.com"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`shadow appearance-none border rounded-2xl lg:w-96 md:w-96 w-72 lg:py-3 md:py-3 py-2 px-2 text-sm leading-tight focus:outline-none focus:shadow-outline ${
                    errors.email && touched.email ? "border border-red-500" : ""
                  }`}
                />
                <p className="font-medium text-red-500 text-sm">
                  {getError("email")}
                </p>
              </div>
              <div className="grid">
                <label className="pb-3 font-bold text-sm" htmlFor="password">
                  Password
                </label>
                <div className="flex flex-col">
                  <input
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="password"
                    name="password"
                    className={`shadow appearance-none border rounded-2xl lg:w-96 md:w-96 w-72 lg:py-3 md:py-3 py-2 px-2 leading-tight focus:outline-none focus:shadow-outline ${
                      errors.password && touched.password
                        ? "border border-red-500"
                        : ""
                    }`}
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                  />
                  <p className="font-medium text-red-500 text-sm">
                    {getError("password")}
                  </p>
                  <div className="absolute pt-3 pl-64 md:pl-80 lg:pl-80">
                    {showPassword ? (
                      <IoMdEye onClick={togglePasswordVisibility} />
                    ) : (
                      <PiEyeSlashThin onClick={togglePasswordVisibility} />
                    )}
                  </div>
                </div>
              </div>
              <div className="py-3">
                <a className="text-sm" href="">
                  Forgotten Password?
                </a>
              </div>
              <div className="bg-primary px-3 py-2 md:py-3 lg:py-3 border rounded-2xl w-72 md:w-96 lg:w-96 text-center leading-tight">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary disabled:opacity-75 font-bold text-center text-sm text-white leading-tight disabled:cursor-not-allowed"
                >
                  Login
                </button>
              </div>

              {log.map((item, i) => (
                <div
                  className="md:pl-9 lg:pl-9"
                  key={i}
                  dangerouslySetInnerHTML={{ __html: item.image }}
                />
              ))}
              <div className="flex gap-8 pl-24 md:pl-32 lg:pl-32">
                <div className="border-x-1 px-2 py-1 border-b-4 rounded-b-lg">
                  <FcGoogle className="w-6 h-6" />
                </div>
                <div className="border-x-1 px-2 py-1 border-b-4 rounded-b-lg">
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

export default Login;

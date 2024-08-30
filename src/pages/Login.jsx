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
    <section className="space-y-8 mx-auto max-w-screen-xl">
      <div className="flex lg:space-x-[470px] lg:justify-start lg:items-start md:justify-center md:items-center justify-center">
        <div className="translate-y-28 md:w-1/2">
          <div className="text-center lg:text-start">
            {" "}
            <h1 className="font-bold text-2xl pb-2">Welcome Back.</h1>
            <p className="text-sm pt-3">
              Already have an account?{" "}
              <a className="font-medium text-primary" href="">
                Sign up
              </a>
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-8 py-8">
            <div className="grid">
              {" "}
              <label className="pb-3 text-sm font-bold" htmlFor="email">
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
              <p className="text-red-500 text-sm font-medium">
                {getError("email")}
              </p>
            </div>
            <div className="grid">
              {" "}
              <label className="pb-3 text-sm font-bold" htmlFor="password">
                Password
              </label>{" "}
              <div className="flex">
                {" "}
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
                <p className="text-red-500 text-sm font-medium">
                  {getError("password")}
                </p>
                <div className="absolute lg:pl-80 md:pl-80 pl-64 pt-3">
                  {showPassword ? (
                    <IoMdEye onClick={togglePasswordVisibility} />
                  ) : (
                    <PiEyeSlashThin onClick={togglePasswordVisibility} />
                  )}
                </div>
              </div>
            </div>
            <div className="py-3">
              {" "}
              <a className="text-sm" href="">
                Forgotten Password?
              </a>
            </div>
            <div className="bg-primary px-3 lg:py-3 md:py-3 py-2 border rounded-2xl lg:w-96 md:w-96 w-72 text-center leading-tight">
              {" "}
              <button
                type="submit"
                disabled={isSubmitting}
                className="leading-tight text-center bg-primary font-bold text-sm text-white disabled:opacity-75 disabled:cursor-not-allowed"
              >
                Login
              </button>
            </div>

            {log.map((item, i) => (
              <div
                className="lg:pl-9 md:pl-9 "
                key={i}
                dangerouslySetInnerHTML={{ __html: item.image }}
              />
            ))}
            <div className="flex gap-8 lg:pl-32 md:pl-32 pl-24 ">
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
        <div className="absolute pl-96 pt-5 primary-gradient hidden lg:block  ">
          <img
            className=" h-[calc(105vh-5rem)] "
            src="/image/herohand.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Login;

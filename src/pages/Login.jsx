import { log } from "../constant/data";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import { PiEyeSlashThin } from "react-icons/pi";

const Login = () => {
  return (
    <section className="space-y-8">
      <div className="container">
        {" "}
        <h1 className="w-[438px] font-semibold text-[40px]">Welcome Back.</h1>
        <p>
          Already have an account?{" "}
          <a className="font-medium text-primary" href="">
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
              className="shadow focus:shadow-outline px-3 py-3 border rounded-2xl w-[400px] leading-tight appearance-none focus:outline-none"
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
                className="shadow focus:shadow-outline px-3 py-3 border rounded-2xl w-[400px] leading-tight appearance-none focus:outline-none"
                type="password"
                placeholder="********"
              />
              <i className="absolute pt-3 pl-80">
                <PiEyeSlashThin />
              </i>
            </div>
          </div>
          <div className="py-3">
            {" "}
            <a href="">Forgotten Password?</a>
          </div>
          <div className="bg-primary px-3 py-3 border rounded-2xl w-[400px] text-center leading-tight">
            {" "}
            <a className="w-[80px] font-semibold text-white text-xl" href="">
              Login
            </a>
          </div>

          {log.map((item, i) => (
            <div key={i} dangerouslySetInnerHTML={{ __html: item.image }} />
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
};

export default Login;

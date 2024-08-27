import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
const Navbar = () => {
  return (
    <nav className=" text-[#0436b6]  h-[75px] py-6 fixed w-full z-[2]  flex items-center bg-white shadow-shadow">
      <div className="container flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">
          PAYERTEL
        </Link>
        <ul className="lg:flex gap-6 hidden ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/services">Service</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <div className="lg:flex space-x-6 hidden">
          <Link
            to="/register"
            className="border rounded-lg px-4 py-[10px] bg-blue-900 text-white"
          >
            Create Account
          </Link>
          <Link
            to="login"
            className="border rounded-lg  px-4 py-[10px] text-black border-sky-500 hover:bg-sky-400 duration-1000"
          >
            Login
          </Link>
        </div>
        <MdMenu className="lg:hidden"/>
      </div>
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import { Link } from "react-scroll";
import { FadeIn } from "./FadeIn";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <FadeIn className="top-0 left-0 z-50 fixed flex items-center bg-white shadow-lg backdrop-blur-2xl px-4 w-full h-16 md:h-20">
      {/* <div className="mx-auto max-w-screen-xl"> */}
      <div className="relative flex justify-between items-center mx-auto w-full max-w-screen-xl">
        <div className="flex justify-center items-center h-16 md:h-20 overflow-clip">
          <a href="/#" className="block py-3 md:py-5 w-20 md:w-24">
            {/* <img src="/720logo.png" alt="logo" className="w-full" /> */}
            <Logo />
          </a>
        </div>
        <div className="flex justify-center items-center px-4 w-full">
          <div>
            <button
              onClick={() => setOpen(!open)}
              className={` ${
                open && "navbarTogglerActive"
              } absolute right-0 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
            >
              <span className="block relative bg-primary my-[6px] md:my-[6px] w-6 md:w-9 h-[2px] md:h-[4px]"></span>
              <span className="block relative bg-primary my-[6px] md:my-[6px] w-6 md:w-9 h-[2px] md:h-[4px]"></span>
              <span className="block relative bg-primary my-[6px] md:my-[6px] w-6 md:w-9 h-[2px] md:h-[4px]"></span>
            </button>
            <nav
              className={`absolute right-0 top-full z-50 w-full max-w-[250px] rounded-lg rounded-t-none bg-white px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none lg:dark:bg-transparent ${
                !open && "hidden"
              } `}
            >
              <ul className="block lg:flex font-medium text-primary text-xl">
                <ListItem NavLink="home">Home</ListItem>
                <ListItem NavLink="about">About</ListItem>
                <ListItem NavLink="schools">Service</ListItem>
                <ListItem NavLink="about">Contact</ListItem>
                <>
                  <NavLink
                    className="flex sm:hidden py-2 font-medium text-base text-primary-dark hover:text-primary underline-offset-8 underline-primary hover:underline cursor-pointer"
                    to="signup"
                  >
                    Create Account
                  </NavLink>
                  <NavLink
                    className="flex sm:hidden py-2 font-medium text-base text-primary-dark hover:text-primary underline-offset-8 underline-primary hover:underline cursor-pointer"
                    to="login"
                  >
                    Login
                  </NavLink>
                </>
              </ul>
            </nav>
          </div>
        </div>
        <div className="sm:flex justify-end hidden pr-16 lg:pr-0 w-full">
          <div className="flex gap-4">
            <NavLink
              to="signup"
              className="flex items-center hover:bg-opacity-90 custom-gradient p-2 rounded-lg font-medium text-base text-white leading-none cursor-pointer"
            >
              Create Account
            </NavLink>

            <NavLink
              to="login"
              className="flex items-center border-2 border-primary hover:bg-opacity-90 px-7 p-2 rounded-lg font-medium text-base text-primary leading-none cursor-pointer gradi"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
      {/* </div> */}
    </FadeIn>
  );
};

const ListItem = ({ children, NavLink }) => {
  return (
    <li>
      <Link
        activeClass="text-primary underline-offset-8 underline-primary underline"
        to={NavLink}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="lg:inline-flex flex lg:ml-12 py-2 font-medium text-base text-primary-dark hover:text-primary underline-offset-8 underline-primary hover:underline cursor-pointer"
      >
        {children}
      </Link>
    </li>
  );
};

export default Navbar;

/* import { Link, NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import Logo from "./Logo";
const Navbar = () => {
  return (
    <nav className="z-50 fixed flex items-center bg-white w-full h-16 text-primary">
      <div className="flex justify-between items-center container">
        <Link to="/" className="w-14 h-14 text-xl">
          <Logo />
        </Link>
        <ul className="lg:flex gap-6 hidden">
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
        <div className="lg:flex gap-4 hidden">
          <Link
            to="signup"
            className="bg-blue-900 p-2 border rounded-lg text-white"
          >
            Create Account
          </Link>
          <Link
            to="login"
            className="border-sky-500 hover:bg-sky-400 p-2 border rounded-lg text-black duration-1000"
          >
            Login
          </Link>
        </div>
        <MdMenu className="lg:hidden" />
      </div>
    </nav>
  );
};

export default Navbar;
 */

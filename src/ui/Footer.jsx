import React from "react";
import { foot, leg } from "../constant/data";
import { FaLongArrowAltRight } from "react-icons/fa";


const Footer = () => {
  return (
    <section className="container pl-6 bg-primary py-14 px-8 ">
      <div className="flex space-x-[126px]">
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
        <div className="flex items-center">
          <a className="bg-white py-3 px-6 rounded-lg" href="">
            Start Today{" "}
          </a>

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
    </section>
  );
};

export default Footer;

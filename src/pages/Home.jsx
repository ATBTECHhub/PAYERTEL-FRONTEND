import React from "react";
import Hero from "../ui/Hero";
import About from "../ui/About";
import Testimonial from "../ui/Testimonial";
import Footer from "../ui/Footer";
import Services from "../ui/Services";
import HowItWorks from "../ui/HowItWorks";
import WhyUs from "../ui/WhyUs";
import GetStarted from "../ui/GetStarted";
import CustomerSupport from "../ui/CustomerSupport";

const Home = () => {
  return (
    <div className="">
      <Navbar/>
      <Hero />
      <Services />
      <About />
      <HowItWorks />
      <WhyUs />
      <GetStarted />
      <Testimonial />
      <CustomerSupport />
      <Footer />
    </div>
  );
};

export default Home;

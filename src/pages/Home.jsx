import Navbar from "../ui/Navbar";
import Hero from "../ui/Hero";
import About from "../ui/About";
import Testimonial from "../ui/Testimonial";
import Services from "../ui/Services";
import HowItWorks from "../ui/HowItWorks";
import WhyUs from "../ui/WhyUs";
import GetStarted from "../ui/GetStarted";
import CustomerSupport from "../ui/CustomerSupport";
import Footer from "../ui/Footer";
import ComingSoon from "./ComingSoon";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <HowItWorks />
      <WhyUs />
      <GetStarted />
      <Testimonial />
      <CustomerSupport />
      <Footer />
      <ComingSoon />
    </div>
  );
};

export default Home;

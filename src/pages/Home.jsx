import Navbar from "../ui/Navbar";
import Hero from "../ui/Hero";
import About from "../ui/About";
import Services from "../ui/Services";
import HowItWorks from "../ui/HowItWorks";
import WhyUs from "../ui/WhyUs";
import GetStarted from "../ui/GetStarted";
import Testimonial from "../ui/Testimonial";
import CustomerSupport from "../ui/CustomerSupport";
import Footer from "../ui/Footer";
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
    </div>
  );
};

export default Home;

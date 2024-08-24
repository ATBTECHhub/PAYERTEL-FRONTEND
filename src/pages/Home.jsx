import Navbar from "../ui/Navbar";
import Hero from "../ui/Hero";
import About from "../ui/About";
import Services from "../ui/Services";
import HowItWorks from "../ui/HowItWorks";
import WhyUs from "../ui/WhyUs";
import GetStarted from "../ui/GetStarted";
import Testimonial from "../ui/Testimonial";
import Support from "../ui/Support";
import Footer from "../ui/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <HowItWorks />
      <GetStarted />
      <Testimonial />
      <Support />
      <Footer />
    </div>
  );
};

export default Home;

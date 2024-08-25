import { NavLink } from "react-router-dom";
import { FadeIn } from "./FadeIn";

function Hero() {
  return (
    <FadeIn>
      <section
        id="home"
        className="h-screen md:h-auto lg:h-screen overflow-clip hero-bg"
      >
        <div className="items-end gap-4 sm:gap-8 md:gap-10 lg:gap-0 grid grid-cols-1 lg:grid-cols-[1fr_1fr] pt-20 sm:pt-24 md:pt-32 lg:pt-44 h-full">
          <div className="flex flex-col items-center lg:items-start gap-4 sm:gap-8 md:gap-10 lg:-mt-20 xl:-mt-80 lg:-mr-20 xl:-mr-32 ml-auto px-4 w-full text-white self-center">
            <h1 className="font-bold text-3xl text-center sm:text-4xl md:text-5xl lg:text-left xl:text-6xl">
              Seamless And Efficient Telecom solutions At your Finger Tips
            </h1>
            <p className="lg:block hidden w-[84%] font-normal text-base sm:text-lg md:text-xl leading-8">
              Welcome to PAYERTEL, your trusted platform for all your needs.
              Wether you need to purchase data bundles, top up your airtime,
              convert your airtime to cash, or subscribe to cable networks,
              PAYERTEL offers a seamless and efficient solution at competitive
              rates. Our platform is designed to cater for busy proffessionals,
              tech-savvy students, stay-at home parents, small business owners
              and retirees.
            </p>
            <div className="py-4 text-primary">
              <NavLink
                className="border-[3px] bg-white px-3 py-3 rounded-xl"
                to="signup"
              >
                Get Started
              </NavLink>
            </div>
          </div>
          <div className="flex justify-center self-center">
            <img
              className="w-full h-full object-cover"
              src="/image/hero50.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </FadeIn>
  );
}

export default Hero;

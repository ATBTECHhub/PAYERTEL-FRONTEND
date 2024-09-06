import { NavLink } from "react-router-dom";
// import { FadeIn } from "./FadeIn";w

function Hero() {
  return (
    // <FadeIn>
    <section
      id="home"
      className="py-6 sm:pt-8 md:pt-10 lg:pt-16 h-[calc(100vh-4rem)] md:h-auto lg:h-[calc(100vh-5rem)] overflow-clip hero-bg"
    >
      <div className="items-end gap-4 sm:gap-8 md:gap-10 lg:gap-0 grid grid-cols-1 lg:grid-cols-[1fr_1fr] h-full">
        <div className="flex flex-col items-center lg:items-start gap-4 sm:gap-8 md:gap-10 xl:-mt-44 lg:-mr-20 xl:-mr-32 ml-auto px-4 w-full text-white self-start md:self-center">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-left xl:text-6xl">
            Seamless And Efficient Telecom solutions At your Finger Tips
          </h1>
          <p className="md:block hidden lg:w-[84%] font-normal text-base sm:text-lg md:text-xl leading-8">
            Welcome to PAYERTEL, your trusted platform for all your needs.
            Whether you need to purchase data bundles, top up your airtime,
            convert your airtime to cash, or subscribe to cable networks,
            PAYERTEL offers a seamless and efficient solution at competitive
            rates. Our platform is designed to cater for busy proffessionals,
            tech-savvy students, stay-at home parents, small business owners and
            retirees.
          </p>
          <p className="block md:hidden font-normal text-base sm:text-lg md:text-xl leading-8">
            Welcome to PAYERTEL, your trusted platform for all your needs.
            Whether you need to purchase data bundles, top up your airtime,
            convert your airtime to cash, or subscribe to cable networks.
          </p>
          <div className="py-4 font-medium text-base text-blue-900">
            <NavLink
              className="border-[3px] bg-white hover:bg-blue-100 px-3 py-3 rounded-lg transition-all"
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
    // </FadeIn>
  );
}

export default Hero;

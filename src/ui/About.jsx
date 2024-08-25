import { FadeIn } from "./FadeIn";

const About = () => {
  return (
    <FadeIn>
      <section
        id="about"
        className="mb-10 sm:mb-16 lg:mb-20 px-4 pt-16 sm:pt-20 lg:pt-24 about-bg"
      >
        <div className="mx-auto max-w-screen-xl">
          <div
            id="about"
            className="items-center gap-x-2 gap-y-4 sm:gap-y-10 lg:gap-x-4 lg:gap-y-16 grid grid-cols-1 md:grid-cols-2 grid-rows-[max-content,1fr] md:grid-rows-none"
          >
            <div className="relative row-start-2 md:row-start-1 row-end-2 md:row-end-1 h-full">
              <img
                className="w-full h-full object-cover"
                src="/image/about40.png"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-self-start gap-4 sm:gap-8 lg:gap-10 lg:mb-0 pb-2 sm:pb-4">
              <h2 className="flex items-center gap-2 font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
                <span className="block relative bg-black my-[4px] sm:my-[6px] w-8 sm:w-9 h-[2px] sm:h-[4px]"></span>
                <span>ABOUT</span>
              </h2>
              <h3 className="font-bold text-2xl text-black sm:text-3xl md:text-4xl">
                Seamless Data Recharges For Uninterrupted Connectivity
              </h3>
              <p className="font-normal text-base sm:text-lg md:text-xl">
                PAYERTEL is a comprehensive platform designed to address the
                telecom needs of users by offering services such as data bundle
                purchases, airtime top-ups, airtime to cash consersions, and
                cable network subscriptions. The platform aims to provide these
                services at competitive rates while ensuring a seamless user
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default About;

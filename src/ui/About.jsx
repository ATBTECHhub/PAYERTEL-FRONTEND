import { FadeIn } from "./FadeIn";

const About = () => {
  return (
    <FadeIn>
      <section id="about" className="mb-20 px-4 pt-24 about-bg">
        <div className="mx-auto max-w-screen-xl">
          <div
            id="about"
            className="items-center gap-x-4 gap-y-16 grid grid-cols-1 md:grid-cols-2 grid-rows-[max-content,1fr] md:grid-rows-none"
          >
            <div className="relative row-start-2 md:row-start-1 row-end-2 md:row-end-1 h-full">
              <img
                className="w-full h-full object-cover"
                src="/image/about-gal.png"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-self-start gap-10 lg:mb-0 pb-4">
              <h2 className="flex items-center gap-2 font-semibold text-xl lg:text-2xl">
                <span className="block relative bg-black my-[6px] w-[36px] h-[4px]"></span>
                <span>ABOUT</span>
              </h2>
              <h3 className="font-bold text-4xl text-black">
                Seamless Data Recharges For Uninterrupted Connectivity
              </h3>
              <p className="font-normal text-xl">
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

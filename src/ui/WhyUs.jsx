import { utilities } from "../constant/data";
import { FadeIn } from "./FadeIn";

const WhyUs = () => {
  return (
    <FadeIn>
      <section className="px-4 sm:px-4 py-10 sm:py-14 md:py-16 lg:py-20 primary-gradient">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="mb-16 font-bold text-4xl text-center text-white md:text-5xl">
            Why Choose Us?
          </h2>
          <div className="gap-4 sm:gap-8 md:gap-10 lg:gap-12 grid grid-cols-1 md:grid-cols-2 mx-auto">
            {utilities.map((item, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 border-slate-200 bg-white shadow-md px-8 md:px-16 py-4 md:py-8 border rounded-3xl"
              >
                <img
                  className="w-12 md:w-16 lg:w-20 h-12 md:h-16 lg:h-20 self-end"
                  src={item.image}
                  alt=""
                />
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
                  {item.title}
                </h3>
                <p className="font-normal text-base sm:text-lg md:text-xl">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default WhyUs;

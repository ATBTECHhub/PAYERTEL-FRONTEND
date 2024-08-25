import { services } from "../constant/data";
import { FadeIn } from "./FadeIn";

const Services = () => {
  return (
    <FadeIn>
      <section className="px-4 py-10">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="mb-12 sm:mb-14 md:mb-16 lg:mb-20 font-bold text-3xl text-center sm:text-4xl md:text-5xl">
            Our Awesome & Unique Feature Services
          </h2>
          <div className="gap-4 sm:gap-6 md:gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((item, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 border-slate-200 shadow-md px-8 sm:px-16 py-4 sm:py-8 border rounded-3xl text-center"
              >
                <img
                  className="max-h-16 sm:max-h-20 md:max-h-24"
                  src={item.image}
                  alt=""
                />
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
                  {item.title}
                </h3>
                <p className="text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default Services;

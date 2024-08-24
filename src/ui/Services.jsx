import { services } from "../constant/data";
import { FadeIn } from "./FadeIn";

const Services = () => {
  return (
    <FadeIn>
      <section className="px-4 py-10">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="mb-20 font-bold text-4xl text-center md:text-5xl">
            Our Awesome & Unique Feature Services
          </h2>
          <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((item, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 border-slate-200 shadow-md px-8 sm:px-16 py-4 sm:py-8 border rounded-3xl text-center"
              >
                <img className="max-h-20 md:max-h-24" src={item.image} alt="" />
                <h3 className="font-bold text-xl md:text-2xl">{item.title}</h3>
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

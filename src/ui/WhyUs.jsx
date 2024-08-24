import { utilities } from "../constant/data";

const WhyUs = () => {
  return (
    <section className="px-4 py-20 primary-gradient">
      <div className="mx-auto max-w-screen-xl">
        <h2 className="mb-16 font-bold text-4xl text-center text-white md:text-5xl">
          Why Choose Us?
        </h2>
        <div className="gap-12 grid grid-cols-1 md:grid-cols-2 mx-auto">
          {utilities.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 border-slate-200 bg-white shadow-md px-8 md:px-16 py-4 md:py-8 border rounded-3xl"
            >
              <img
                className="w-16 md:w-20 h-16 md:h-20 self-end"
                src={item.image}
                alt=""
              />
              <h3 className="font-bold text-xl md:text-2xl">{item.title}</h3>
              <p className="font-normal text-lg md:text-xl">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

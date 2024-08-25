import { FaQuoteLeft } from "react-icons/fa";
import { FadeIn } from "./FadeIn";
const Testimonial = () => {
  return (
    <FadeIn>
      <section
        id="testimonials"
        className="my-6 sm:my-12 md:my-16 lg:my-20 px-4 py-12 sm:py-14 md:py-16 lg:py-20 primary-gradient"
      >
        <div className="mx-auto max-w-screen-xl">
          <h2 className="mb-10 sm:mb-12 lg:mb-16 font-bold text-4xl text-center text-white md:text-5xl">
            What Clients Say About Us.
          </h2>
          <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col gap-4 bg-white p-4 rounded-2xl">
              <div className="text-2xl text-primary md:text-4xl">
                <FaQuoteLeft />
              </div>
              <p className="text-base">
                PAYERTEL makes managing my telecom services quick and
                hassle-free, so i can focus on my work.
              </p>
              <div className="flex justify-self-end items-center gap-4 mt-auto pt-8 border-t border-blue-100">
                <img
                  className="max-w-12 md:max-w-16"
                  src="/image/timage1.png"
                  alt=""
                />
                <div>
                  <h3 className="font-medium text-lg text-primary md:text-xl">
                    Sarah, 28
                  </h3>
                  <p className="text-xs leading-4">Marketing Manager</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 bg-white p-4 rounded-2xl">
              <div className="text-2xl text-primary md:text-4xl">
                <FaQuoteLeft />
              </div>
              <p className="text-base">
                As a student, I need an affordable and reliable telecom service
                that fits my budget and lifestyle, PAYERTEL delivers just that.
              </p>
              <div className="flex justify-self-end items-center gap-4 mt-auto pt-8 border-t border-blue-100">
                <img
                  className="max-w-12 md:max-w-16"
                  src="/image/timage2.png"
                  alt=""
                />
                <div>
                  <h3 className="font-medium text-lg text-primary md:text-xl">
                    David, 21
                  </h3>
                  <p className="text-xs leading-4">University Student</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 bg-white p-4 rounded-2xl">
              <div className="text-2xl text-primary md:text-4xl">
                <FaQuoteLeft />
              </div>
              <p className="text-base">
                I need a reliable service that offers everything in one place,
                and helps me save money for my family. PAYERTEL, is the perfect
                solution.
              </p>
              <div className="flex justify-self-end items-center gap-4 mt-auto pt-8 border-t border-blue1300">
                <img
                  className="max-w-12 md:max-w-16"
                  src="/image/timage2.png"
                  alt=""
                />
                <div>
                  <h3 className="font-medium text-lg text-primary md:text-xl">
                    Mariah, 35
                  </h3>
                  <p className="text-xs">Stay-home parent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default Testimonial;

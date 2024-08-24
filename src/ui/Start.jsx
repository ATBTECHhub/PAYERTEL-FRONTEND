import { FadeIn } from "./FadeIn";

const Start = () => {
  return (
    <FadeIn>
      <section className="border-gray-200 py-10 pl-4 border">
        <div className="mx-auto max-w-screen-xl">
          <div className="items-end grid grid-cols-1 md:grid-cols-[1.5fr_2fr]">
            <div className="flex flex-col justify-self-end gap-4 px-4 md:px-10 lg:px-16">
              <h1 className="font-bold text-3xl md:text-5xl">
                Get Started With <span className="text-primary">PAYERTEL</span>
                Today!
              </h1>

              <p className="font-normal text-xl">
                Join the growing community of users who trust PAYERTEL for thier
                telecom needs. Sign up now and experience the future of telecom
                services.
              </p>
              <a
                href=""
                className="border-2 bg-primary p-2 rounded-md text-white self-start"
              >
                Get Started
              </a>
            </div>
            <div className="relative">
              <img className="w-full" src="/image/get-started.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default Start;

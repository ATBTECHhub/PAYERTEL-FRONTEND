import { FadeIn } from "./FadeIn";

const HowItWorks = () => {
  return (
    <FadeIn>
      <section
        id="how-it-works"
        className="my-6 sm:my-12 md:my-16 lg:my-20 px-4 py-12 sm:py-14 md:py-16 lg:py-20 border-b border-blue-50"
      >
        <div className="mx-auto max-w-screen-xl">
          <h2 className="mb-8 md:mb-16 font-bold text-4xl text-center text-primary md:text-5xl">
            How It Works
          </h2>

          <div className="items-center gap-4 grid grid-cols-1 md:grid-cols-[1.5fr_2fr]">
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="flex gap-2 lg:gap-4">
                <span className="flex justify-center items-center bg-primary lg:-mt-2 p-4 lg:p-6 rounded-full w-4 md:w-8 lg:w-12 h-4 md:h-8 lg:h-12 font-mediun text-white">
                  1
                </span>
                <div className="flex flex-col gap-2 lg:gap-4">
                  <h1 className="font-extrabold text-primary text-xl lg:text-2xl">
                    Sign in
                  </h1>
                  <p className="font-medium text-base lg:text-lg">
                    Initiate a sign in process into your payertel account by
                    inserting your unique username and password
                  </p>
                </div>
              </div>

              <div className="flex gap-2 lg:gap-4">
                <span className="flex justify-center items-center bg-primary lg:-mt-2 p-4 lg:p-6 rounded-full w-4 md:w-8 lg:w-12 h-4 md:h-8 lg:h-12 font-mediun text-white">
                  2
                </span>
                <div className="flex flex-col gap-2 lg:gap-4">
                  <h1 className="font-extrabold text-primary text-xl lg:text-2xl">
                    Fund Wallet
                  </h1>
                  <p className="font-medium text-base lg:text-lg">
                    Click on the wallet icon ,then proceed to initiate funds
                    into your wallet via our payment gateways and get credited
                    instantly
                  </p>
                </div>
              </div>

              <div className="flex gap-2 lg:gap-4">
                <span className="flex justify-center items-center bg-primary lg:-mt-2 p-4 lg:p-6 rounded-full w-4 md:w-8 lg:w-12 h-4 md:h-8 lg:h-12 font-mediun text-white">
                  3
                </span>
                <div className="flex flex-col gap-2 lg:gap-4">
                  <h1 className="font-extrabold text-primary text-xl lg:text-2xl">
                    Place Order
                  </h1>
                  <p className="font-medium text-base lg:text-lg">
                    Select any order icon of your choice on our mouth watering
                    services that comes with an amazing discount rates
                  </p>
                </div>
              </div>

              <div className="flex gap-2 lg:gap-4">
                <span className="flex justify-center items-center bg-primary lg:-mt-2 p-4 lg:p-6 rounded-full w-4 md:w-8 lg:w-12 h-4 md:h-8 lg:h-12 font-mediun text-white">
                  4
                </span>
                <div className="flex flex-col gap-2 lg:gap-4">
                  <h1 className="font-extrabold text-primary text-xl lg:text-2xl">
                    Instant Activation
                  </h1>
                  <p className="font-medium text-base lg:text-lg">
                    Once your payment is confirmed, your plan is instantly
                    activated. You can start using your data right away or any
                    selected services you choose enjoying uninterrupted
                    connectivity for all your online activities
                  </p>
                </div>
              </div>
            </div>
            <img
              className="h-full object-cover"
              src="/image/how-it-works.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default HowItWorks;

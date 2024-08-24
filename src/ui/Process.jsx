const Process = () => {
  return (
    <section className="px-4 py-8 md:py-10">
      <div className="mx-auto max-w-screen-xl">
        <h2 className="mb-8 md:mb-16 font-bold text-4xl md:text-5xl text-center text-primary">
          How It Works
        </h2>

        <div className="items-center gap-4 grid grid-cols-1 md:grid-cols-[1.5fr_2fr]">
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex gap-2 lg:gap-4">
              <span className="flex justify-center lg:-mt-2 items-center bg-primary p-4 lg:p-6 rounded-full w-4 h-4 md:w-8 md:h-8 lg:w-12 lg:h-12 font-mediun text-white">
                1
              </span>
              <div className="flex flex-col gap-2 lg:gap-4">
                <h1 className="font-extrabold text-xl lg:text-2xl text-primary">
                  Sign in
                </h1>
                <p className="font-medium text-base lg:text-lg ">
                  Initiate a sign in process into your payertel account by
                  inserting your unique username and password
                </p>
              </div>
            </div>

            <div className="flex gap-2 lg:gap-4">
              <span className="flex justify-center lg:-mt-2 items-center bg-primary p-4 lg:p-6 rounded-full w-4 h-4 md:w-8 md:h-8 lg:w-12 lg:h-12 font-mediun text-white">
                2
              </span>
              <div className="flex flex-col gap-2 lg:gap-4">
                <h1 className="font-extrabold text-xl lg:text-2xl text-primary">
                  Fund Wallet
                </h1>
                <p className="font-medium text-base lg:text-lg ">
                  Click on the wallet icon ,then proceed to initiate funds into
                  your wallet via our payment gateways and get credited
                  instantly
                </p>
              </div>
            </div>

            <div className="flex gap-2 lg:gap-4">
              <span className="flex justify-center lg:-mt-2 items-center bg-primary p-4 lg:p-6 rounded-full w-4 h-4 md:w-8 md:h-8 lg:w-12 lg:h-12 font-mediun text-white">
                3
              </span>
              <div className="flex flex-col gap-2 lg:gap-4">
                <h1 className="font-extrabold text-xl lg:text-2xl text-primary">
                  Place Order
                </h1>
                <p className="font-medium text-base lg:text-lg ">
                  Select any order icon of your choice on our mouth watering
                  services that comes with an amazing discount rates
                </p>
              </div>
            </div>

            <div className="flex gap-2 lg:gap-4">
              <span className="flex justify-center lg:-mt-2 items-center bg-primary p-4 lg:p-6 rounded-full w-4 h-4 md:w-8 md:h-8 lg:w-12 lg:h-12 font-mediun text-white">
                4
              </span>
              <div className="flex flex-col gap-2 lg:gap-4">
                <h1 className="font-extrabold text-xl lg:text-2xl text-primary">
                  Instant Activation
                </h1>
                <p className="font-medium text-base lg:text-lg ">
                  Once your payment is confirmed, your plan is instantly
                  activated. You can start using your data right away or any
                  selected services you choose enjoying uninterrupted
                  connectivity for all your online activities
                </p>
              </div>
            </div>
          </div>
          {/* <div className=""> */}
          <img
            className="object-cover h-full"
            src="/image/how-it-works.png"
            alt=""
          />
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Process;

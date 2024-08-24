const Support = () => {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <img
            className="justify-self-end w-full"
            src="/image/customer.png"
            alt=""
          />
          <div className="flex flex-col gap-2 sm:gap-10 md:p-4 lg:p-8">
            <h2 className="font-bold text-3xl mt-8 md:mt-0 text-primary">
              Customer support
            </h2>
            <h3 className="font-bold text-3xl">
              We Are Here To Assist You With Any Enquiries.
            </h3>
            <div className="flex gap-4 flex-wrap justify-center">
              <div className="flex flex-col gap-4 p-6 pt-10 shadow-lg border border-gray-200 rounded-3xl items-center">
                <img
                  className="max-w-12 max-h-12"
                  src="src/icon/phone-call.svg"
                  alt="phone-call"
                />
                <h3 className="text-primary font-semibold text-xl">
                  Phone Number
                </h3>
                <p className="">07053467892</p>
              </div>
              <div className="flex flex-col gap-4 p-6 pt-10 shadow-lg border border-gray-200 rounded-3xl items-center">
                <img
                  className="max-w-12 max-h-12"
                  src="src/icon/email.svg"
                  alt="phone-call"
                />
                <h3 className="text-primary font-semibold text-xl">E-mail</h3>
                <p className="">trypayertel@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;

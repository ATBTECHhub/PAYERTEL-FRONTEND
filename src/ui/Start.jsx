import React from "react";

const Start = () => {
  return (
    <section className="container ">
      <div className="flex justify-center">
        <div className="inset-y-1/2 py-[200px]">
          <h1 className="font-bold text-[64px] leading-[78px] w-[528px] h-[200px]">
            {" "}
            Get Started With <span className="text-primary">PAYERTEL</span>{" "}
            Today!
          </h1>

          <p className="font-normal text-xl leading-8 w-[369px] h-[100px] pt-8">
            Join the growing community of users who trust{" "}
            <span className="text-primary">PAYERTEL</span> for thier telecom
            needs. Sign up now and experience the future of telecom services.
          </p>
          <div className="pt-36">
            {" "}
            <a
              href=""
              className="border rounded-lg  px-[40px] py-[16px] text-white bg-primary h-[56px] w-[190px] "
            >
              Get Started
            </a>
          </div>
        </div>
        <div>
          <img
            className=" h-[700px] w-[900px]"
            src="/image/startgal.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Start;

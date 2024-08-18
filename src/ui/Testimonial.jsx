import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
const Testimonial = () => {
  return (
    <section className="container text-center bg-primary">
      <h1 className=" font-extrabold text-[64px] ">
        What Clients Say About Us.
      </h1>
      <div className="flex  space-x-24 container py-[62px]">
        <div className="  rounded-2xl bg-white  w-[350px] ">
          <div className="h-10 w-[57px] pl-3 pt-5">
            {" "}
            <FaQuoteLeft />
          </div>
          <p className="w-[345px] h-[72px] text-base py-8 items-center">
            PAYERTEL makes managing my telecom services quick and hassle-free,
            so i can focus on my work.
          </p>
          <div className="pt-12 w-[80%] mx-auto">
            {" "}
            <hr />
          </div>
          <div className="flex items-center gap-4 pl-5">
            {" "}
            <div className="py-[30px]">
              {" "}
              <img
                className="w-[95px] h-[95px] "
                src="/image/timage1.png"
                alt=""
              />
            </div>
            <div>
              {" "}
              <h3 className="w-[137px] h-10 text-2xl font-semibold">
                Sarah, 28
              </h3>
              <p className="w-[130px] h-4 text-xs leading-4">
                Marketing Manager
              </p>
            </div>
          </div>
        </div>{" "}
        <div className="  rounded-2xl bg-white  w-[350px] ">
          <div className="h-10 w-[57px] pl-3 pt-5">
            {" "}
            <FaQuoteLeft />
          </div>
          <p className="w-[345px] h-[96px] text-base py-8 items-center">
            As a student, I need an affordable and reliable telecom service that
            fits my budget and lifestyle, PAYERTEL delivers just that.
          </p>
          <div className="pt-12 w-[80%] mx-auto">
            {" "}
            <hr />
          </div>
          <div className="flex items-center gap-4 pl-5">
            {" "}
            <div className="py-[30px]">
              {" "}
              <img
                className="w-[95px] h-[95px] "
                src="/image/timage2.png"
                alt=""
              />
            </div>
            <div>
              {" "}
              <h3 className="w-[137px] h-10 text-2xl font-semibold">
                David, 21
              </h3>
              <p className="w-[130px] h-4 text-xs leading-4">
                University Student
              </p>
            </div>
          </div>
        </div>{" "}
        <div className="  rounded-2xl bg-white  w-[350px] ">
          <div className="h-10 w-[57px] pl-3 pt-5">
            {" "}
            <FaQuoteLeft />
          </div>
          <p className="w-[340px] h-[96px] text-base py-8 items-center">
            I need a reliable service that offers everything in one place, and
            helps me save money for my family. PAYERTEL, is the perfect
            solution.
          </p>
          <div className="pt-12 w-[80%] mx-auto">
            {" "}
            <hr />
          </div>
          <div className="flex items-center gap-4 pl-5">
            {" "}
            <div className="py-[30px]">
              {" "}
              <img
                className="w-[95px] h-[95px] "
                src="/image/timage2.png"
                alt=""
              />
            </div>
            <div>
              {" "}
              <h3 className="w-[137px] h-10 text-2xl font-semibold">
                Mariah, 35
              </h3>
              <p className="w-[130px] h-4 text-xs leading-4">
                Stay-home parent
              </p>
            </div>
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default Testimonial;

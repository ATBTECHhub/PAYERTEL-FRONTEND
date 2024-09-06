import React from "react";
import { IoCloseCircle } from "react-icons/io5";

const Accdetails = () => {
  return (
    <section className="mx-auto w-[80%] translate-y-3/4 border py-4 px-2 rounded-3xl primary-gradient">
      <div className="pb-3 pl-56 text-white">
        <IoCloseCircle />
      </div>

      <div className="text-sm font-bold space-y-6 text-white">
        <h1>Account Details</h1>
        <h1>Bank Name - Moniepoint Bank</h1>
        <h1>Bank Number - 8124564768</h1>
        <h1>Account Name - Payertel-kelvin</h1>
      </div>
    </section>
  );
};

export default Accdetails;

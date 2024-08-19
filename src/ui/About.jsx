import React from "react";

const About = () => {
  return (
    <section className="container aboutpage py-12 lg:py-20 lg:pl-40">
      <div className="space-y-[30px] lg:space-y-[50px]">
        <div className="text-right">
          <h1 className="font-semibold text-xl text-right  lg:text-2xl">
            ABOUT
          </h1>
        </div>
        <div className="text-right space-y-[50px] lg:space-y-[70px]">
          {" "}
          <h1 className="font-bold  text-[48px]  lg:text-[64px] leading-[60px] lg:leading-[78px]">
            Seamless Data <br /> Recharges For <br /> Uninterrupted <br />{" "}
            Connectivity
          </h1>
          <p className=" leading-[28px] font-normal text-xl lg:leading-[32px lg:text-base">
            PAYERTEL is a comprehensive platform designed to address the <br />{" "}
            telecom needs of users by offering services such as data bundle{" "}
            <br /> purchases, airtime top-ups, airtime to cash consersions, and
            cable <br /> network subscriptions. The platform aims to provide
            these <br /> services at competitive rates while ensuring a seamless
            user <br /> experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

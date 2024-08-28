import { useState, useEffect } from "react";
import LogoWhite from "../ui/LogoWhite";

function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      let dest = new Date("Sep 31, 2024 23:59:59").getTime();
      let now = new Date().getTime();
      let diff = dest - now;

      if (diff <= 0) {
        let nextMonthDate = new Date();
        nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
        if (nextMonthDate.getMonth() === 0) {
          nextMonthDate.setFullYear(nextMonthDate.getFullYear() + 1);
        }
        dest = nextMonthDate.getTime();
        diff = dest - now;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    calculateTimeLeft(); // Initial call
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <div
      className={`fixed left-0 top-0 flex h-full min-h-screen w-full items-center z-50 justify-center px-4 py-5 backdrop-blur-sm`}
    >
      <div className="mx-auto px-4 md:px-5 lg:px-5 w-full max-w-7xl">
        <div className="flex flex-col justify-end items-center gap-10 md:gap-16 lg:gap-28 bg-black/75 px-10 md:px-16 pt-10 md:pt-16 pb-10 rounded-2xl w-full">
          <div className="flex flex-col justify-end items-center">
            {/* <img src="/icon/logo40.svg" alt="pagedone logo" /> */}
            <div className="-ml-6 w-48 sm:w-60">
              <LogoWhite />
            </div>
            <div className="flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-10">
              <div className="flex flex-col justify-start items-center gap-2.5">
                <h2 className="shadow-sm font-bold text-4xl text-center text-emerald-600 sm:text-5xl md:text-6xl leading-normal">
                  Coming Soon
                </h2>
                <p className="text-center text-gray-200 sm:text-base leading-relaxed">
                  Just 20 days remaining until the big reveal of our new
                  product!
                </p>
              </div>
              <div className="flex justify-center items-start gap-2 w-full count-down-main">
                {["days", "hours", "minutes", "seconds"].map((unit) => (
                  <div key={unit} className="flex flex-col gap-0.5 timer">
                    <div>
                      <h3
                        className={`countdown-element ${unit} text-center text-emerald-600 text-2xl font-bold leading-9`}
                      >
                        {timeLeft[unit]}
                      </h3>
                    </div>
                    <p className="w-full text-center text-gray-200 text-xs leading-normal">
                      {unit.toUpperCase()}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col justify-center items-center gap-5 w-full">
                {/* <h6 className="font-semibold text-base text-center text-white leading-relaxed">
                  Launched Date: July 23, 2024
                </h6> */}
                <form className="flex sm:flex-row flex-col justify-center items-center gap-2.5">
                  <input
                    type="text"
                    className="border-gray-200 bg-white shadow-sm px-3.5 py-2 border rounded-lg w-full max-w-80 focus:outline-none h-10 text-gray-900 text-sm leading-relaxed placeholder-gray-400"
                    placeholder="Type your mail..."
                  />
                  <button className="flex justify-center items-center bg-emerald-500 hover:bg-emerald-600 shadow-sm px-3.5 py-2 rounded-lg w-full sm:w-fit transition-all duration-700 ease-in-out">
                    <span className="px-1.5 font-medium text-gray-900 text-sm leading-6 whitespace-nowrap">
                      Notify Me
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <p className="text-base text-center text-gray-200 sm:text-sm leading-snug">
            Get in touch with us:{" "}
            <a
              href="mailto:mail@pagedone.com"
              className="hover:text-gray-100 transition-all duration-700 ease-in-out"
            >
              trypayertel@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;

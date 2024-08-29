import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import LogoWhite from "./LogoWhite";
import { useAddToWaitList } from "../features/useAddToWaitList";
import SuccessModal from "./SuccessModal";

function Waitlist() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const { addToWaitList, isPending, isSuccess } = useAddToWaitList();
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const calculateTimeLeft = () => {
      let dest = new Date("Sep 30, 2024 23:59:59").getTime(); // Changed to 'Sep 30' to be a valid date
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

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    console.log("isPending:", isPending, "isSuccess:", isSuccess);
    setSuccessModalOpen(isSuccess);
  }, [isPending, isSuccess]);

  function onSubmit({ email }) {
    addToWaitList(email, {
      onSettled: () => reset(),
    });
  }

  return (
    <>
      <div
        className={`fixed left-0 top-0 flex h-full min-h-screen w-full items-center z-50 justify-center px-4 py-5 backdrop-blur-sm`}
      >
        <div className="mx-auto px-4 md:px-5 lg:px-5 w-full max-w-7xl">
          <div className="relative flex flex-col justify-end items-center gap-10 md:gap-16 lg:gap-28 bg-black/75 px-10 md:px-16 pt-10 md:pt-16 pb-10 rounded-2xl w-full">
            <div className="flex flex-col justify-end items-center">
              <div className="-ml-6 w-48 sm:w-60">
                <LogoWhite />
              </div>
              <div className="flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-10">
                <div className="flex flex-col justify-start items-center gap-2.5">
                  <h2 className="shadow-sm font-bold text-[#0436b6] text-4xl text-center sm:text-5xl md:text-6xl leading-normal">
                    Coming Soon
                  </h2>
                  <p className="text-[#b4c3e9] text-center sm:text-base leading-relaxed">
                    Just {timeLeft["days"]} days remaining until the big reveal
                    of our new product!
                  </p>
                </div>
                <div className="flex justify-center items-start gap-2 w-full count-down-main">
                  {["days", "hours", "minutes", "seconds"].map((unit) => (
                    <div key={unit} className="flex flex-col gap-0.5 timer">
                      <div>
                        <h3
                          className={`countdown-element ${unit} text-center text-[#F27430] text-2xl font-bold leading-9`}
                        >
                          {timeLeft[unit]}
                        </h3>
                      </div>
                      <p className="w-full text-[#b4c3e9] text-center text-xs leading-normal">
                        {unit.toUpperCase()}
                      </p>
                    </div>
                  ))}
                </div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-2.5"
                >
                  <div className="flex sm:flex-row flex-col justify-center gap-2.5">
                    <input
                      type="email"
                      className={`border-gray-200 bg-white shadow-sm px-3.5 py-2 border rounded-lg  sm:w-80 focus:outline-none h-10 text-gray-900 text-sm leading-relaxed placeholder-gray-400 ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      placeholder="Type your mail..."
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email format",
                        },
                      })}
                      disabled={isPending}
                    />

                    <button
                      type="submit"
                      className={`flex justify-center items-center bg-[#0436b6] hover:bg-[#0436b6] shadow-sm px-3.5 py-2 rounded-lg w-full sm:w-fit transition-all duration-700 ease-in-out ${
                        isPending ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={isPending}
                    >
                      {isPending && <span className="loader"></span>}
                      <span className="px-1.5 font-medium text-[#b4c3e9] text-sm leading-6 whitespace-nowrap">
                        Notify Me
                      </span>
                    </button>
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-red-500 text-xs">
                      {errors.email.message}
                    </p>
                  )}
                </form>
              </div>
            </div>
            <p className="text-[#b4c3e9] text-base text-center sm:text-sm leading-snug">
              Get in touch with us: &nbsp;
              <a
                href="mailto:trypayertel@gmail.com"
                className="hover:text-[#e6ebf8] transition-all duration-700 ease-in-out"
              >
                trypayertel@gmail.com
              </a>
            </p>
          </div>
          {isSuccess && (
            <SuccessModal
              modalOpen={successModalOpen}
              setModalOpen={setSuccessModalOpen}
              heading="Thank you!"
              message="You have been successfully added to the our Wait List."
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Waitlist;

import { PiBellSimpleRingingBold } from "react-icons/pi";
import { FaCirclePlus } from "react-icons/fa6";
import {
  board,
  bundle,
  dashboard,
  foot,
  leg,
  services,
  transact,
} from "../constant/data";
import { FaEye } from "react-icons/fa6";
import Footer from "../ui/Footer";

const Dashboard = () => {
  return (
    <main>
      <section className=" max-w-screen-2xl mx-auto primary-gradient">
        
        <nav className="flex justify-between items-center container lg:py-10 py-5 pb-20">
          <div className="flex items-center gap-4">
            <img
              className="lg:w-20 lg:h-20 w-10 h-10"
              src="/image/dash.png"
              alt=""
            />
            <div className="grid lg:pb-3 pb-1 text-white">
              {" "}
              <h1 className="lg:text-lg text-xs">Welcome!</h1>
              <p className="lg:text-sm text-xs">Dee-zigi</p>
            </div>
          </div>
          <div className="text-white">
            {" "}
            <PiBellSimpleRingingBold className="lg:w-8 lg:h-10 w-4 h-5 " />
          </div>
        </nav>
        <div className="bg-white rounded-t-3xl">
          <div className="space-y-3  mx-auto text-center py-5 border rounded-3xl w-[80%] primary-gradient border-slate-100 md:w-[55%] lg:w-[40%] xl:w-[30%] -translate-y-6">
            <div>
              <p className="font-normal text-xs text-white md:text-xl">
                Total Balance
              </p>
            </div>

            <div className="flex items-center gap-3 pl-12">
              <p className="font-bold text-xs text-white md:text-xl md:pl-20 xl:pl-20 pl-6">
                NGN 600,000
              </p>
              <FaEye className="w-3 h-3 text-white" />
            </div>

            
            <div className="flex py-3 pl-16 items-center space-x-1 md:pl-32 xl:pl-[130px]">
              <button class="btn text-xs font-semibold border px-6 py-0.5 rounded-full text-primary bg-white md:py-1 md:px-8 md:text-base">
                <i class=""></i> fund wallet
              </button>
              <div className="absolute pl-24 md:pl-32 ">
                <FaCirclePlus className="w-3 h-3 text-primary md:w-5 md:h-5" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 py-6 gap-4 w-[75%] mx-auto  space-x-4 md:grid-cols-3 lg:grid-cols-5 ">
            {board.map((item, i) => (
              <div className=" border object-cover grid place-items-center border-slate-200 shadow-xl rounded-3xl py-4">
                <img className=" h-10 w-10 xl:h-16 xl:w-16" src={item.image} alt="" />
                <div className="text-center ">
                  <h3 className="font-bold text-[8px] lg:text-base">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="xl:w-[80%] mx-auto w-[85%]">
            <img src="image/frameee.png" alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Dashboard;

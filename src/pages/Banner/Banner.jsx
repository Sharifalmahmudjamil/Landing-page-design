import { IoSearch } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";

import { AiFillDollarCircle } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
const Banner = () => {
  return (
    <div>
      <div
        className="hero max-w-screen h-[350px] relative "
        style={{ backgroundImage: "url(https://i.ibb.co/09rMSMv/banner.jpg)" }}
      >
        <div className="hero-content  text-neutral-content border lg:w-[1100px] h-[350px] bg-white absolute mt-52">
          <div className=" border-b-2 border-[#ECF5FF] lg:w-[950px] bg-white -mt-60  font-medium text-lg text-[#4B5563]">
            <span className="w-[30px] hidden md:block h-[1px] bg-[#0059B1] rounded-sm mb-4  mt-7 absolute"></span>
            <div className="flex gap-8">
              <a className="text-[#0059B1]" href="">
                Buy
              </a>
              <a href="">Rent</a>
              <a href="">PG</a>
              <a href="">Plot</a>
              <a href="">Commercial</a>
            </div>
          </div>
        </div>
        {/* search option */}
        <div className="hero-content border lg:w-[950px] h-[40px]  bg-white absolute mt-24">
          <div className=" flex-1 flex gap-5 text-base font-normal text-[#6B7280]">
            <IoSearch className="text-2xl" />
            <h1>Search properties</h1>
          </div>
        </div>
        <div className="hero-content border lg:w-[950px] h-[40px]   absolute mt-[450px] bg-[#0059B1]">
          <div className="  flex gap-5 text-base font-normal text-white ">
            <IoSearch className="text-2xl" />
            <h1>Find Property</h1>
          </div>
        </div>
        <div className="hero-content  lg:w-[950px] h-[40px]   absolute mt-[220px]">
          <div className="flex flex-1 justify-between text-lg font-semibold">
            <h1 className="flex">
              {" "}
              <IoLocationOutline className="mt-1 text-[#EE6611]" /> Your
              Location{" "}
            </h1>
            <h1 className="flex gap-1">
              <FaHome className="mt-1 text-[#EE6611]" /> Property Type
            </h1>
            <h1 className="flex gap-1">
              {" "}
              <AiFillDollarCircle className="mt-1 text-[#EE6611]" /> Budget
            </h1>
          </div>
          <div className="hero-content  lg:w-[950px] h-[40px]   absolute mt-[100px]">
            <div className="flex gap-[100px] ">
              <div className="hero-content border lg:w-[250px] h-[40px] bg-[#ECF5FF]">
                {" "}
                <IoIosArrowDown className="-mr-48 text-lg text-[#EE6611]" />{" "}
              </div>
              <div className="hero-content border lg:w-[250px] h-[40px] bg-[#ECF5FF]">
                <IoIosArrowDown className="-mr-48 text-lg text-[#EE6611]" />
              </div>
              <div className="hero-content border lg:w-[250px] h-[40px] bg-[#ECF5FF]">
                <IoIosArrowDown className="-mr-48 text-lg text-[#EE6611]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

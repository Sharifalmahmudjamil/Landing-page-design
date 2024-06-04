import { IoSearch } from "react-icons/io5";
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
        <div className="hero-content border lg:w-[950px] h-[40px]  bg-white absolute mt-28">
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
      </div>
    </div>
  );
};

export default Banner;

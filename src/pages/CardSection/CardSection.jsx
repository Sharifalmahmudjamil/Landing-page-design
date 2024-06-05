import { MdArrowCircleDown } from "react-icons/md";
const CardSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-36 gap-5 max-w-screen-xl mx-auto">
      <div className="  bg-[#FDF0E7] text-primary-content w-[250px] h-[220px] mx-auto">
        <div className="card-body">
          <h2 className="card-title text-[#D95D0F] text-4xl font-bold">2k+</h2>
          <p className="text-base font-normal text-[#1F2937]">
            New Flat Listed
          </p>
          <div className="card-actions mt-12 gap-20">
            <h1 className="text-[#E61] text-base font-normal underline">
              View all
            </h1>
            <MdArrowCircleDown className="text-3xl text-[#E61]" />
          </div>
        </div>
      </div>
      <div className="  bg-[#ECF5FF] text-primary-content w-[250px] h-[220px] mx-auto">
        <div className="card-body">
          <h2 className="card-title text-[#0051A1] text-4xl font-bold">2k+</h2>
          <p className="text-base font-normal text-[#1F2937]">
            New Flat Listed
          </p>
          <div className="card-actions mt-12 gap-24">
            <h1 className="text-[#0059B1] text-base font-normal underline">
              View all
            </h1>
            <MdArrowCircleDown className="text-3xl text-[#0059B1]" />
          </div>
        </div>
      </div>
      <div className="  bg-[#FDF0E7] text-primary-content w-[250px] h-[220px] mx-auto">
        <div className="card-body">
          <h2 className="card-title text-[#D95D0F] text-4xl font-bold">2k+</h2>
          <p className="text-base font-normal text-[#1F2937]">
            New Flat Listed
          </p>
          <div className="card-actions mt-12 gap-24">
            <h1 className="text-[#E61] text-base font-normal underline">
              View all
            </h1>
            <MdArrowCircleDown className="text-3xl text-[#E61]" />
          </div>
        </div>
      </div>
      <div className="  bg-[#ECF5FF] text-primary-content w-[250px] h-[220px] mx-auto">
        <div className="card-body">
          <h2 className="card-title text-[#0051A1] text-4xl font-bold">2k+</h2>
          <p className="text-base font-normal text-[#1F2937]">
            New Flat Listed
          </p>
          <div className="card-actions mt-12 gap-24">
            <h1 className="text-[#0059B1] text-base font-normal underline">
              View all
            </h1>
            <MdArrowCircleDown className="text-3xl text-[#0059B1]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;

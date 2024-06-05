/* eslint-disable react/no-unescaped-entities */

const Testimonials = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-bold text-[#181818] text-center mt-10">
          Testimonials
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          <div className=" w-[500px] h-[350px] lg:card-side bg-[#ECF5FF] shadow-xl ">
            <div className="card-body items-center">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>

              <p className="text-lg text-[#818181] font-normal text-center">
                "The level of security provided by CypherPlay is unmatched. I
                feel confident using my card for both everyday purchases and
                travel. It's the peace of mind I was looking for."
              </p>
              <div className="card-actions justify-end mt-5">
                <img
                  className="w-12 h-12 rounded-full"
                  src="../../../Image/avatar1.jpg"
                  alt=""
                />
              </div>
              <p className="text-xl font-semibold text-[#111827]">Tony Stark</p>
              <p className="text-base font-normal text-[#6B7280]">
                Marketing manager, XYZ
              </p>
            </div>
          </div>
          <div className=" w-[500px] h-[350px] lg:card-side bg-[#ECF5FF] shadow-xl ">
            <div className="card-body items-center">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>

              <p className="text-lg text-[#818181] font-normal text-center">
                "The level of security provided by CypherPlay is unmatched. I
                feel confident using my card for both everyday purchases and
                travel. It's the peace of mind I was looking for."
              </p>
              <div className="card-actions justify-end mt-5">
                <img
                  className="w-12 h-12 rounded-full"
                  src="../../../Image/avatar2.jpg"
                  alt=""
                />
              </div>
              <p className="text-xl font-semibold text-[#111827]">Tony Stark</p>
              <p className="text-base font-normal text-[#6B7280]">
                Marketing manager, XYZ
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-5">
          <span className="w-[30px]  hidden md:block h-[12px] bg-[#E61] rounded-full mb-4  mt-7 ">
            {" "}
          </span>
          <span className="w-[10px]  hidden md:block h-[10px] bg-[#E61] rounded-full mb-4  mt-8  ">
            {" "}
          </span>
          <span className="w-[10px]  hidden md:block h-[10px] bg-[#E61] rounded-full mb-4  mt-8  ">
            {" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

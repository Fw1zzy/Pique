import React from "react";
import { arrowright, bgicon1, bgicon2 } from "../assets";

const Header = () => {
  return (
    <section id="/" className="my-[102px] relative overflow-hidden">
      {/* Background Icons */}
      <img
        fetchpriority="high"
        src={bgicon1}
        width={300}
        height={300}
        title="Icon Left"
        alt="Background Icon Left"
        className="absolute top-0 -left-[10rem] h-auto max-md:w-[200px] max-md:-left-[5rem] max-md:top-[20rem] max-xs:w-[140px]" // Adjust size and positioning as needed
      />
      <img
        fetchpriority="high"
        src={bgicon2}
        width={300}
        height={300}
        title="Icon Right"
        alt="Background Icon Right"
        className="absolute top-[8rem] -right-[10rem] h-auto max-md:w-[200px] max-md:-right-[5rem] max-md:top-[28rem] max-xs:w-[140px]" // Adjust size and positioning as needed
      />

      <div
        className="flex flex-col items-center text-center pb-[6rem] mx-[2rem] lg:mx-[10rem]"
      >
        <div className="bg-[#F8F8F6] flex justify-end items-center rounded-full gap-4 w-fit border border-gray-300 mb-5">
          <h2 className="font-manrope transition-all font-medium text-[14px] py-2 px-4">
            Enterprise Solution
          </h2>
        </div>

        <h1 className="text-[64px] text-style1 leading-[5rem] max-ss:text-[45px] max-ss:leading-[3.5rem]">
          Enrich Your Qualified Leads <br /> With Adaptive Engagement
        </h1>

        <p className="text-[20px] font-manrope mt-[2rem] z-20">
          Our Platform makes it easier for global sales teams to <br /> convert
          their Qualified Leads Into Paying Customers
        </p>

        <div className="mt-[2.5rem]">
          <a href="https://cal.com/arcui/uri.co-discover-call" target="_blank">
            <div className="primary-button flex justify-end items-center rounded-full gap-4 w-fit">
              <h2 className="font-manrope transition-all font-medium text-[17px] pl-4">
                Contact us
              </h2>
              <div className="bg-white p-2 rounded-full">
                <img
                  fetchpriority="high"
                  src={arrowright}
                  width={16}
                  height={16}
                  alt="Arrow Icon"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;

import React from 'react'
import { arrowrightw } from "../assets";

const ContactUs = () => {
  return (
    <section id='contact' className="flex flex-col items-center text-center my-[6rem] bg-[#1D1F13] rounded-3xl py-[7rem] mx-[2rem] max-ss:mx-0 max-ss:rounded-none lg:mx-[5rem]">
      <div className='bg-transparent flex justify-end items-center rounded-full gap-4 w-fit border border-gray-300 mb-5'>
          <h2 className='font-manrope text-white transition-all font-medium text-[14px] py-2 px-4'>Contact us</h2>
      </div>

      <h1 className="text-white text-[48px] text-style1 max-ss:text-[45px] leading-[3.5rem] ">
      Let's Increase Your <br/> Top Line Revenue
      </h1>

      <p className="text-white text-[16px] font-manrope mt-[2rem]">
      Let's Scale your Business.
      </p>

      <div className="mt-[2.5rem]">
        <a href="https://cal.com/arcui/uri.co-discover-call" target="_blank">
          <div className="secondary-button hover:bg-gray-300 flex justify-end items-center rounded-full gap-4 w-fit">
            <h2 className="font-manrope transition-all font-medium text-[17px] pl-4">
              Book a call
            </h2>
            <div className="bg-[#1D1F13] p-2 rounded-full">
              <img fetchpriority="high" src={arrowrightw} width={16} height={16} />
            </div>
          </div>
        </a>
      </div>

  </section>
  )
}

export default ContactUs

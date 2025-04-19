import React from 'react'
import Dropdown from './Dropdown'
import { arrowright, bgicon1, bgicon2 } from '../assets'

const Faqs = () => {
  return (
    <section id='faqs' className='relative overflow-hidden pt-[6rem]' >
            {/* Background Icons */}
      <img
        fetchpriority="high"
        src={bgicon1}
        alt="Background Icon Left"
        className="absolute top-0 -left-[10rem] w-[300px] h-auto max-md:w-[200px] max-md:-left-[5rem] max-md:top-[20rem] max-xs:w-[140px]" // Adjust size and positioning as needed
      />
      <img
        fetchpriority="high"
        src={bgicon2}
        alt="Background Icon Right"
        className="absolute top-[8rem] -right-[10rem] w-[300px] h-auto max-md:w-[200px] max-md:-right-[5rem] max-md:top-[28rem] max-xs:w-[140px] max-ss:top-[50rem]" // Adjust size and positioning as needed
      />
      <div  className=' pb-[5rem] z-10 flex flex-row items-start max-xs:items-center px-[2rem] lg:px-[10rem] max-xs:flex-col'>
        <div className='flex flex-2 flex-col justify-center items-center pr-[3rem] max-xs:pr-0'>
          <div className='bg-[#F8F8F6] flex justify-end items-center rounded-full gap-4 w-fit border border-gray-300 mb-7'>
              <h2 className='font-manrope transition-all font-medium text-[14px] py-2 px-4'>FAQ</h2>
          </div>

          <h2 className='text-[48px] text-center text-style1 max-ss:text-[45px] leading-[4rem]'>Have any Questions?</h2>

          <p className="text-[16px] font-manrope mt-[2rem]">Find the answers here. or book a call with us</p>    

          <div className="pt-[3rem]">
            <a href="https://cal.com/arcui/uri.co-discover-call" target="_blank">
              <div className="primary-button flex justify-end items-center rounded-full gap-4 w-fit">
                <h2 className="font-manrope transition-all font-medium text-[17px] pl-4">
                  Book A Demo
                </h2>
                <div className="bg-white p-2 rounded-full">
                  <img fetchpriority="high" src={arrowright} width={16} height={16} />
                </div>
              </div>
            </a>
          </div>     
        </div>

        <div className='z-11 flex-1 max-xs:pt-[4rem]'>
        <Dropdown/>
        </div>
        
    </div>
    </section>
  )
}

export default Faqs
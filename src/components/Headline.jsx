import React from 'react'
import { arrowright, chart } from "../assets";

const Headline = () => {
  return (
    <section id='about' className='mt-[3rem] mb-[5rem] mx-[2rem] lg:px-[10rem] gap-5 max-xs:flex-col flex flex-row justify-between items-center'>
      <div className='flex flex-col '>
        <div className='bg-[#F8F8F6] flex justify-end items-center rounded-full gap-4 w-fit border border-gray-300 mb-5'>
            <h2 className='font-manrope transition-all font-medium text-[14px] py-2 px-4'>Our Impact</h2>
        </div>

        <h2 className='text-[48px] text-style1 max-ss:text-[45px] leading-[3.5rem]'>Increase Conversion <br/> with Accelerated <br/> Adaptive Onbaording</h2>

        <p className="text-[16px] font-manrope mt-[2rem]">At Pique, we build innovative retention systems to help your solutions <br/>  resonate deeply with your audience and retain them further, adding <br/> to your top line revenue!</p>

        <div className="mt-[2.5rem]">
          <a href="https://cal.com/arcui/uri.co-discover-call" target="_blank">
            <div className="primary-button flex justify-end items-center rounded-full gap-4 w-fit">
              <h2 className="font-manrope transition-all font-medium text-[17px] pl-4">
                Get Onboarded
              </h2>
              <div className="bg-white p-2 rounded-full">
                <img fetchpriority="high" src={arrowright} width={16} height={16} />
              </div>
            </div>
          </a>
        </div>     
      </div>

      <div className='max-xs:mt-[3rem]  '>
        <img fetchpriority="high" src={chart} width={448} height={448} className='rounded-2xl' />
      </div>

    </section>
        
  )
}

export default Headline
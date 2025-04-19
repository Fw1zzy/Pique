import React from 'react'
import { arrowright, fingerprint, magnet, medal } from "../assets";

const AdaptiveProcess = () => {
  const AdaptiveProcessDes = [
    {
      icon: fingerprint,
      title: "Intelligent Onboarding",
      description: "Ensures a frictionless onboarding experience with personalized, step-by-step guidance.",
    },
    {
      icon: magnet,
      title: "Adaptive Demand Matching",
      description: "Turn insights into action with analytics that allow you to understand every step of your customers decision making",
    },
    {
      icon: medal,
      title: "Interactive Communication",
      description: "Increase engagement through adaptive interactions that resonate with your customers at every touchpoint",
    },
  ]
  return (
    <section id='process' className='pb-[4rem] mt-[8rem] px-[2rem] lg:px-[10rem]'>
      <div className='flex flex-col justify-center items-center '>
        <div className='bg-[#F8F8F6] flex justify-end items-center rounded-full gap-4 w-fit border border-gray-300 mb-7'>
            <h2 className='font-manrope transition-all font-medium text-[14px] py-2 px-4'>Adaptive Process</h2>
        </div>

        <h2 className='text-[48px] text-center text-style1 max-ss:text-[45px] leading-[4rem]'>Our Systems Helps Your Sales <br/> Team At Critical Stages</h2>

        <p className="text-[16px] font-manrope mt-[2rem]">We understand building a qualified lead base is a ground-up process <br/> and so we have systems to help from the foundational Level</p>

        <div className='flex flex-row max-md:flex-col justify-center items-center gap-5 mt-[4rem]'>
          {AdaptiveProcessDes.map((adapt, index) => (
            <div key={index} className='w-[380px] max-md:w-full max-md:h-auto max-md:mt-4 h-[300px] flex flex-col justify-center bg-gray-100 px-8 py-10 rounded-xl'>
              <img fetchpriority="high" src={adapt.icon} width={42} height={42} className='mb-4'/>
              <h3 className='text-[35px] font-manrope leading-10'>{adapt.title}</h3>
              <p className="text-[16px] font-manrope mt-[1rem]">{adapt.description}</p>
            </div>
          ))}
        </div>

        <div className="pt-[5rem]">
          <a href="https://cal.com/arcui/uri.co-discover-call" target="_blank">
            <div className="primary-button flex justify-end items-center rounded-full gap-4 w-fit">
              <h2 className="font-manrope transition-all font-medium text-[17px] pl-4">
                Contact us
              </h2>
              <div className="bg-white p-2 rounded-full">
                <img fetchpriority="high" src={arrowright} width={16} height={16} />
              </div>
            </div>
          </a>
        </div>     
      </div>       
    </section>
  )
}

export default AdaptiveProcess

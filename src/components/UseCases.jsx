import React from 'react'
import { arrowright } from "../assets";

const UseCases = () => {
  const useCasesDes = [
    {
      title: "Accelerating Conversions",
      description: "Our platform adaptive personalized post-event follow-ups, helping your team nurture leads faster and improve conversion rates.",
      direc: "Learn more",
      link: "/",
    },
    {
      title: "Cross-Departmental Alignment",
      description: "Streamline workflows across departments, ensuring consistent and efficient customer experiences during internal growth.",
      direc: "Learn more",
      link: "/",
    },
    {
      title: "Increasing Product Adoption",
      description: "Our platform tailors engagement based on user behavior, driving faster product adoption and increasing customer satisfaction.",
      direc: "Learn more",
      link: "/",
    },
  ]
  return (
    <section id='services' className='py-[4rem] px-[2rem] lg:px-[10rem]'>
      <div className='flex flex-col justify-center items-center '>
        <div className='bg-[#F8F8F6] flex justify-end items-center rounded-full gap-4 w-fit border border-gray-300 mb-5'>
            <h2 className='font-manrope transition-all font-medium text-[14px] py-2 px-4'>Use Cases</h2>
        </div>

        <h2 className='text-[48px] text-style1 max-ss:text-[45px] leading-[3.5rem]'>Ways How we can Help you</h2>

        <p className="text-[16px] font-manrope mt-[2rem]">Tailored solutions for your scaling journey.</p>

        <div className='flex flex-row max-md:flex-col justify-center items-start mt-[4rem]'>
          {useCasesDes.map((cases, index) => (
            <div key={index} className='hover:bg-[#D9F273] py-6 px-7 rounded-2xl'>
              <h3 className='text-[20px] text-style1'>{cases.title}</h3>
              <p className="text-[16px] font-manrope mt-[1rem]">{cases.description}</p>
              <div className='flex items-center gap-1 mt-[2rem]'>
                <a href={cases.link} className="text-[16px] text-style1 underline">{cases.direc}</a>
                <img fetchpriority="high" src={arrowright} width={14} height={14} />
              </div>
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

export default UseCases

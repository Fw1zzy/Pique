import React, { useState } from 'react';
import { faqsDesc } from '../constant';
import { arrowdown, arrowup } from '../assets';

const Dropdown = () => {
  const [visibleDropdowns, setVisibleDropdowns] = useState({});

  const toggleDropdown = (index) => {
    setVisibleDropdowns((prevVisibleDropdowns) => ({
      ...prevVisibleDropdowns,
      [index]: !prevVisibleDropdowns[index],
    }));
  };

  return (
    <div className='max-w-[1080px] flex flex-col justify-center gap-3 items-center  rounded-xl'>
        {faqsDesc.map((faqs, index) => (
          <div className='bg-gray-100 rounded-xl relative select-none' key={index}>
            <div className='px-5 py-5 flex justify-between items-center cursor-pointer' onClick={() => toggleDropdown(index)}>
              <h3 className='text-[20px] font-manrope max-ss:text-[18px]'>{faqs.question}</h3>
              {visibleDropdowns[index] ? (
                 <img fetchpriority="high" src={arrowup} className='cursor-pointer w-[20px] h-[20px]' />
              ) : (
                <img fetchpriority="high" src={arrowdown} className='cursor-pointer w-[20px] h-[20px]' />
              )}
            </div>
            <div className={`px-5 overflow-hidden transition-all duration-150 ease-in-out ${visibleDropdowns[index] ? 'max-h-[1000px] py-5' : 'max-h-0'}`}>
              <p className='text-[18px] font-manrope max-ss:text-[16px]'>{faqs.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Dropdown;

import React from 'react';
import { motion } from 'framer-motion';
import { arrowright } from '../../assets';
import { ContactUs, Faqs } from '../../components';

const Error = () => {

  return (
    <section className='my-[102px]'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.3, duration: 1.5 }}
        className="flex flex-col items-center text-center pb-[6rem] mx-[2rem] lg:mx-[10rem]"
      >
        <div className="bg-[#F8F8F6] flex justify-end items-center rounded-full gap-4 w-fit border border-gray-300 mb-5">
          <h2 className="font-manrope transition-all font-medium text-[14px] py-2 px-4">
            404 error
          </h2>
        </div>

        <h1 className="text-[64px] text-style1 leading-[5rem] max-ss:text-[45px] max-ss:leading-[3.5rem]">
            Page not found
        </h1>

        <p className="text-[20px] font-manrope mt-[2rem] z-20">
        This page was moved or doesn't exist.
        </p>

        <div className="mt-[2.5rem]">
          <a href="/">
            <div className="primary-button flex justify-end items-center rounded-full gap-4 w-fit">
              <h2 className="font-manrope transition-all font-medium text-[17px] pl-4">
                Go to homepage
              </h2>
              <div className="bg-white p-2 rounded-full">
                <img src={arrowright} width={16} height={16} alt="Arrow Icon" />
              </div>
            </div>
          </a>
        </div>
      </motion.div>

      <Faqs/>
      <ContactUs/>
    </section>
  );
};

export default Error;

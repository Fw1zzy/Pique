import React from 'react'
import { ContactUs, Faqs } from '../../components';

const TermsAndConditions = () => {
  return (
  <section>
    <div className='pb-[5rem] mx-[2rem] lg:mx-[10rem] pt-[3rem] flex flex-col justify-start items-start pr-[15rem] max-xs:pr-[0rem] max-xs:flex-col'>
      <div className="bg-[#F8F8F6] flex justify-end items-center rounded-full gap-4 w-fit border border-gray-300 mb-5">
        <h2 className="font-manrope transition-all font-medium text-[14px] py-2 px-4">
          Terms & Conditions
        </h2>
      </div>
      <h1 className='text-[56px] font-bold font-manrope leading-[3.5rem] text-left'>Terms & Conditions</h1>
      <p className='text-[18px] font-manrope text-left mt-[1rem]'>Last Updated: 14th September 2024</p>
      <p className='text-[18px] font-manrope text-left mt-[3rem]'>
        Welcome to Pique. By accessing or using our website and services, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully.
      </p>

      <p className='text-[18px] font-manrope text-left mt-[2rem]'>1. <span className='text-manrope font-bold'>Use of the Website</span></p>
      <p className='text-[18px] font-manrope text-left mt-[2rem]'>
        By accessing the website, you agree that you will not engage in any unlawful activities, including but not limited to unauthorized access, hacking, or violating any intellectual property rights.
      </p>
      <p className='text-[18px] font-manrope text-left'>You are responsible for maintaining the confidentiality of your account information.</p>

      <p className='text-[18px] font-manrope text-left mt-[2rem]'>2. <span className='text-manrope font-bold'>Services</span></p>
      <p className='text-[18px] font-manrope text-left mt-[2rem]'>
        Pique provides adaptive engagement solutions and related services. By using our services, you agree to provide accurate and current information.
      </p>
      <p className='text-[18px] font-manrope text-left'>We reserve the right to modify or discontinue services without prior notice.</p>

      <p className='text-[18px] font-manrope text-left mt-[2rem]'>3. <span className='text-manrope font-bold'>Intellectual Property</span></p>
      <p className='text-[18px] font-manrope text-left mt-[2rem]'>
        All content, materials, and intellectual property on this website are owned by Pique or licensed to us. You may not reproduce, distribute, or modify any content without prior written permission.
      </p>

      <p className='text-[18px] font-manrope text-left mt-[2rem]'>4. <span className='text-manrope font-bold'>Limitations of Liability</span></p>
      <p className='text-[18px] font-manrope text-left mt-[2rem]'>
        Pique is not liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our services or website.
      </p>
      <p className='text-[18px] font-manrope text-left'>
        We are not responsible for any loss of data, profits, or damages caused by unauthorized access to your account.
      </p>

      <p className='text-[18px] font-manrope text-left mt-[2rem]'>5. <span className='text-manrope font-bold'>User Obligations</span></p>
      <p className='text-[18px] font-manrope text-left mt-[2rem]'>
        You agree not to misuse the website, attempt to breach security measures, or use it for fraudulent purposes.
      </p>
      <p className='text-[18px] font-manrope text-left'>
        You are responsible for ensuring that any information or content you submit is accurate and does not violate any laws or third-party rights.
      </p>

      <p className='text-[18px] font-manrope text-left mt-[2rem]'>6. <span className='text-manrope font-bold'>Termination</span></p>
      <p className='text-[18px] font-manrope text-left mt-[2rem]'>
        Pique reserves the right to suspend or terminate your access to our services if you violate these Terms and Conditions.
      </p>

      <p className='text-[18px] font-manrope text-left mt-[2rem]'>7. <span className='text-manrope font-bold'>Governing Law</span></p>
      <p className='text-[18px] font-manrope text-left mt-[2rem]'>
        These Terms and Conditions shall be governed by and construed in accordance with the laws of India.
      </p>

      <p className='text-[18px] font-manrope text-left mt-[2rem]'>8. <span className='text-manrope font-bold'>Changes to the Terms</span></p>
      <p className='text-[18px] font-manrope text-left mt-[2rem]'>
        Pique reserves the right to modify these Terms and Conditions at any time. Continued use of the website or services following any changes constitutes your acceptance of the new terms.
      </p>

      <p className='text-[18px] font-manrope text-left mt-[2rem]'>9. <span className='text-manrope font-bold'>Contact Information</span></p>
      <p className='text-[18px] font-manrope text-left mt-[2rem]'>
        For any inquiries regarding these Terms and Conditions, please contact us at pique@iaculus.com
      </p>
    </div>

    <Faqs/>
    <ContactUs/>
  </section>
  )
}

export default TermsAndConditions
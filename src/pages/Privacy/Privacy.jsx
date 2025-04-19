import React from 'react'
import { ContactUs, Faqs } from '../../components';

const Privacy = () => {
  return (
  <section>
    <div className='pb-[5rem] mx-[2rem] lg:mx-[10rem] pt-[3rem] flex flex-col justify-start items-start pr-[15rem] max-xs:pr-[0rem] max-xs:flex-col'>
      <div className="bg-[#F8F8F6] flex justify-end items-center rounded-full gap-4 w-fit border border-gray-300 mb-5">
        <h2 className="font-manrope transition-all font-medium text-[14px] py-2 px-4">
        Privacy Policy
        </h2>
      </div>
      <h1 className='text-[56px] font-bold font-manrope leading-[3.5rem] text-left'>Privacy Policy</h1>
      <p className='text-[18px] font-manrope text-left mt-[1rem]'>Last Updated: 14th September 2024</p>
      <p className='text-[18px] font-manrope text-left mt-[3rem]'>Pique ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you interact with our services, website, and other online platforms.
      </p>

      <p className='text-[18px] font-manrope text-left mt-[2rem]'>1. <span className='text-manrope font-bold'>Information We Collect</span></p>
      <p className='text-[18px] font-manrope text-left mt-[2rem]'>We may collect and process the following types of information:</p>

      <ul className='list-disc ml-[1rem]'>
        <li className='text-[18px] font-manrope text-left mt-[2rem]'><span className='text-manrope font-bold'>Personal Information:</span> Includes your name, email address, phone number, job title, company name, and other contact details that you provide when you fill out forms on our website, subscribe to our services, or communicate with us.</li>
        <li className='text-[18px] font-manrope text-left'><span className='text-manrope font-bold'>Usage Data:</span> Information about your interactions with our website and services, such as your IP address, browser type, operating system, referring URLs, pages viewed, and the date/time of your visits.</li>
        <li className='text-[18px] font-manrope text-left'><span className='text-manrope font-bold'>Cookies and Tracking Technologies:</span> We use cookies and similar tracking technologies to enhance your experience on our website, analyze usage patterns, and deliver personalized content.</li>
      </ul>

      <p className='text-[18px] font-manrope text-left mt-[2rem]'>2. <span className='text-manrope font-bold'>How We Use Your Information</span></p>
      <p className='text-[18px] font-manrope text-left mt-[2rem]'>We may collect and process the following types of information:</p>

      <ul className='list-disc ml-[1rem]'>
        <li className='text-[18px] font-manrope text-left mt-[2rem]'><span className='text-manrope font-bold'>Service Delivery:</span> To provide, operate, and maintain our services, including customer support and communication.</li>
        <li className='text-[18px] font-manrope text-left'><span className='text-manrope font-bold'>Personalization:</span> To tailor our services and communications to your preferences, including targeted marketing and content.</li>
        <li className='text-[18px] font-manrope text-left'><span className='text-manrope font-bold'>Improvement and Analysis:</span> To understand how our services are used, to improve our offerings, and to develop new features and services.</li>
        <li className='text-[18px] font-manrope text-left'><span className='text-manrope font-bold'>Compliance: </span> To comply with legal obligations and enforce our terms of service.</li>
      </ul>

      <p className='text-[18px] font-manrope text-left mt-[2rem]'>3. <span className='text-manrope font-bold'>Sharing of Information</span></p>
      <p className='text-[18px] font-manrope text-left mt-[2rem]'>We may share your personal information with:</p>

      <ul className='list-disc ml-[1rem]'>
        <li className='text-[18px] font-manrope text-left mt-[2rem]'><span className='text-manrope font-bold'>Service Providers:</span> Third-party companies and individuals that provide services on our behalf, such as hosting, data analysis, payment processing, and marketing assistance.</li>
        <li className='text-[18px] font-manrope text-left'><span className='text-manrope font-bold'>Business Transfers:</span> In the event of a merger, acquisition, or sale of all or a portion of our assets, your personal information may be transferred as part of that transaction.</li>
        <li className='text-[18px] font-manrope text-left'><span className='text-manrope font-bold'>Legal Obligations:</span> We may disclose your information if required by law or in response to valid requests by public authorities (e.g., a court or government agency).</li>
      </ul>

      <p className='text-[18px] font-manrope text-left mt-[2rem]'>4. <span className='text-manrope font-bold'>Data Security</span></p>
      <p className='text-[18px] font-manrope text-left mt-[2rem]'>We take appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no internet-based service is completely secure, and we cannot guarantee absolute security.</p>

      <p className='text-[18px] font-manrope text-left mt-[2rem]'>5. <span className='text-manrope font-bold'>Your Privacy Rights</span></p>
      <p className='text-[18px] font-manrope text-left mt-[2rem]'>You have certain rights regarding your personal information, including:</p>

      <ul className='list-disc ml-[1rem]'>
        <li className='text-[18px] font-manrope text-left mt-[2rem]'><span className='text-manrope font-bold'>Access and Correction:</span> You may request access to the personal information we hold about you and request corrections if any of the information is inaccurate.</li>
        <li className='text-[18px] font-manrope text-left'><span className='text-manrope font-bold'>Opt-Out:</span>You can opt-out of receiving marketing communications from us by following the unsubscribe instructions included in those communications or by contacting us directly.</li>
        <li className='text-[18px] font-manrope text-left'><span className='text-manrope font-bold'>Data Deletion:</span> You may request that we delete your personal information, subject to certain exceptions required by law.</li>
      </ul>

      <p className='text-[18px] font-manrope text-left mt-[2rem]'>6. <span className='text-manrope font-bold'>Cookies</span></p>
      <p className='text-[18px] font-manrope text-left mt-[2rem]'>You can choose to disable cookies via your browser settings. However, some features of our website may not function properly without them.</p>

      <p className='text-[18px] font-manrope text-left mt-[2rem]'>7. <span className='text-manrope font-bold'>Changes to This Privacy Policy</span></p>
      <p className='text-[18px] font-manrope text-left mt-[2rem]'>We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. We will notify you of any significant changes by posting the new Privacy Policy on our website with a revised "Effective Date."</p>

      <p className='text-[18px] font-manrope text-left mt-[2rem]'>8. <span className='text-manrope font-bold'>Contact Us</span></p>
      <p className='text-[18px] font-manrope text-left mt-[2rem]'>For any questions or concerns about this Privacy Policy, please contact us at pique@iaculus.com</p>

    </div>
    <Faqs/>
    <ContactUs/>
  </section>
  )
}

export default Privacy
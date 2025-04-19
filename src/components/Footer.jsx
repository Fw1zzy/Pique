import React from "react";
import { navLinks } from "../constant";
import { arrowright, logo } from "../assets";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (id) => {
    const homeSections = ["#about", "#process", "#pricing", "#faqs"];

    // Redirect to home with the appropriate section if on privacy page or error page
    if (
      (location.pathname === "/privacy" || location.pathname === "/*") &&
      homeSections.includes(id)
    ) {
      navigate(`/${id}`);
    } else {
      // If already on home or other page, just update the URL and scroll to the section
      window.location.href = `/${id}`;
    }
  };
  return (
    <div className="border-t-2 ">
      <div className="px-[2rem] lg:px-[12rem]">
        <div className="pt-[4rem]">
          <a href="/" className="flex justify-start items-center gap-3">
            <div className="bg-[#D9F273] p-2 rounded-full">
              <img
                fetchpriority="high"
                src={logo}
                alt="logo"
                className="object-contain cursor-pointer"
              />
            </div>
            <h2 className="font-manrope text-[24px] font-semibold">Pique</h2>
          </a>
        </div>

        <div className="flex justify-start items-center gap-6 pt-[2rem] max-xs:flex-col max-xs:items-start">
          <ul className="font-manrope text-[16px] flex items-center gap-[3rem] max-xs:gap-[1rem] max-xs:flex-col max-xs:items-start">
            {navLinks.map((nav, index) => (
              <li key={index}>
                <a
                  onClick={() => handleNavClick(nav.id)}
                  className="nav-icon transition-all hover:text-[#FF520E] cursor-pointer"
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="primary-button flex justify-end items-center rounded-full gap-4 w-fit">
            <h2
              className="font-manrope transition-all font-medium text-[17px] pl-4"
            >
              Get Onboarded
            </h2>
            <div className="bg-white p-2 rounded-full ">
              <img fetchpriority="high" src={arrowright} width={16} height={16} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mx-[2rem] max-xs:flex-col-reverse max-xs:items-start lg:mx-[12rem] mt-[2rem] border-t-2">
        <div className="my-[2rem]">
          <a href="#" className="text-[16px] hover:text-[#D9F273]  font-manrope text-left">
            ©2024 Pique of Iaculus
          </a>
        </div>

        <div className="flex items-center gap-4 my-[2rem] max-xs:gap-2 max-xs:flex-col max-xs:items-start">
          <a href="/privacy" className="text-[16px] hover:text-[#D9F273] font-manrope text-left">
            Privacy Policy
          </a>
          <a href="/terms-and-conditions" className="text-[16px] hover:text-[#D9F273] font-manrope text-left">
            Terms & Conditions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

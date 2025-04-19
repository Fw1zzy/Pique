import React from 'react';
import { navLinks } from '../constant';
import { arrowright, logo, close, menu } from '../assets';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const handleNavClick = (id) => {
    const homeSections = ['#about', '#process', '#pricing', '#faqs'];

    // Redirect to home with the appropriate section if on privacy page or error page
    if ((location.pathname === '/privacy' || location.pathname === '/*') && homeSections.includes(id)) {
      navigate(`/${id}`);
    } else {
      // If already on home or other page, just update the URL and scroll to the section
      window.location.href = `/${id}`;
    }
  };

  return (
    <nav className='sticky top-6 z-50 flex items-center justify-between max-xs:top-0 max-xs:mx-0 max-xs:mt-0 max-xs:rounded-none bg-[#F8F8F6] p-3 my-6 mx-[2rem] rounded-full border border-gray-300 lg:mx-[17rem]'>
      <div>
        <a href='/' className='flex justify-center items-center gap-3'>
          <div className='bg-[#D9F273] p-2 rounded-full'>
            <img fetchpriority="high" src={logo} alt='logo' className='object-contain cursor-pointer' />
          </div>
          <h2 className='font-manrope text-[24px] font-semibold'>Pique</h2>
        </a>
      </div>

      <ul className='max-xs:hidden font-manrope text-[16px] flex items-center gap-[3rem]'>
        {navLinks.map((nav, index) => (
          <li key={index} className=''>
            <a href='#' onClick={() => handleNavClick(nav.id)} className="nav-icon transition-all font-medium hover:text-[#D9F273] cursor-pointer">
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <a href='https://cal.com/arcui/uri.co-discover-call' target="_blank" className='max-xs:hidden'>
        <div className='primary-button flex justify-end items-center rounded-full gap-4 w-fit'>
            <h2 className='font-manrope transition-all font-medium text-[17px] pl-4'>Book A Demo</h2>
            <div className='bg-white p-2 rounded-full '>
              <img loading="lazy" src={arrowright} width={16} height={16}/>
            </div>
        </div>
      </a>

      <div className="xs:hidden flex flex-1 justify-end items-center pr-3 z-[99]">
        <img loading="lazy" src={toggle ? close : menu} 
          alt="menu"
          className="w-[30px] h-[30px] object-contain "
          onClick={() => setToggle((prev => !prev))}
        />
      </div>

      <div className={`${toggle ? 'flex' : 'hidden'} absolute top-0 right-0 left-0 p-7 my-2 min-w-[140px] bg-slate-100 dark:bg-[#131a32] rounded-md sidebar flex-col items-start z-[10]
      `}> 
        <ul className="list-none flex flex-col justify-center px-5 items-start mt-[3rem]">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-manrope font-semibold cursor-pointer text=[18px] dark:text-slate-100 ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}
                >
                  <a href={nav.id} className="nav-icon transition-all font-medium hover:text-[#D9F273] cursor-pointer">
                    {nav.title}
                  </a>
                </li>
              ))}
        </ul>
        <a href='https://cal.com/arcui/uri.co-discover-call' target="_blank" className='mt-5'>
        <div className='primary-button flex justify-end items-center rounded-full gap-4 w-fit'>
            <h2 className='font-manrope transition-all font-medium text-[17px] pl-4'>Book A Demo</h2>
            <div className='bg-white p-2 rounded-full '>
              <img loading="lazy" src={arrowright} width={16} height={16}/>
            </div>
        </div>
      </a>
      </div>
    </nav>
  );
};

export default Navbar;

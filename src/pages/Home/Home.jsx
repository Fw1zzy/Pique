import React, { useEffect } from 'react';
import { AdaptiveProcess, Faqs, Header, Headline, UseCases, ContactUs } from '../../components';
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();

  useEffect(() => {

    const scrollToSection = () => {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (location.hash) {
      requestAnimationFrame(scrollToSection);
    }
  }, [location]);

  return (
    <div>
      <Header />
      <Headline />
      <UseCases />
      <AdaptiveProcess />
      <Faqs/>
      <ContactUs/>
    </div>
  );
}

export default Home;

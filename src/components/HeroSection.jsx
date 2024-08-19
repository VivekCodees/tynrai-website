import React from 'react';
import home_bg from '../../public/home_bg.svg';
import logo from '../../public/logo.svg'

const HeroSection = () => {
  return (
    <div 
      className="h-screen flex items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${home_bg})` }}
    >
      <div className="text-center px-5">
        <img src={logo} alt="Tynrai Logo" className="mx-auto mb-4 w-60 h-60" />
        <div className='h-fit overflow-y-hidden'>
          <h1 className="md:text-7xl text-6xl font-bold mb-1 animate-riseUp">tynrai.org</h1>
        </div>
        <p className="text-md font-thin mb-6">Empowering Shillong's Digital Future</p>
        <p className="text-xl font-thin mt-10">Building the Region’s First Localized Data Center to Drive Innovation, Security, and Growth</p>
      </div>
    </div>
  );
};

export default HeroSection;

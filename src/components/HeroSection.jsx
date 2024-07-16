import React from 'react';
const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center w-full justify-center content-between bg-center lg:bg-contain md:bg-cover sm:bg-cover bg-no-repeat  bg-slate-600" style={{backgroundImage: `url('https://framerusercontent.com/images/QOzP1jJP3WnEJBT1umaRWakgSeU.png?scale-down-to=1024')`}}>
      <div className="absolute top-10 left-60 text-black lg:text-white lg:text-xl cursor-pointer">Tynrai</div>
      <div className="absolute top-10 right-60 text-black lg:text-white lg:text-xl cursor-pointer">Start</div>
      <div className="absolute bottom-20 left-60 text-black lg:text-white lg:text-xl cursor-pointer">Empowerment</div>
      <div className="absolute bottom-20 right-64  text-black lg:text-white lg:text-xl cursor-pointer z-10">Innovation</div>
      
      {/* <div className="text-center">
        <div className="relative custom">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-5xl opacity-35 leading-4 text-white">Unleashing</div>
          </div>
          <div className="absolute  inset-0 leading-4 flex items-center justify-center transform translate-y-16">
            <div className="text-5xl opacity-35 text-white">Shillong's Potential</div>
          </div>
          <div className="absolute inset-0  flex items-center justify-center transform translate-y-32">
            <div className="text-5xl opacity-35 text-white">Digitally.</div>
          </div>
        </div>
      </div> */}
      <div className="text-center text-xl text-white opacity-55">
        <div className="custom-text lg:text-7xl">Unleashing</div>
        <div className="custom-text lg:text-7xl">Shillong's Potential</div>
        <div className="custom-text lg:text-7xl">Digitally</div>
      </div>
    </div>
  );
};

export default HeroSection;
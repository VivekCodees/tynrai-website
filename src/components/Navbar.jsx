import React,{ useEffect, useState } from "react";

import Logo from "../../public/logo.svg";

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`flex justify-between items-center fixed z-40 w-screen py-4 px-8 transition-colors duration-500 ${scrolled || menuOpen ? 'bg-black text-white' : 'bg-transparent text-white'}`}>
      <div className="flex items-center z-50">
        <div className="rounded-full">
          <a href='/'>
            <img 
              src={Logo}
              alt="Logo"
              className="w-auto h-12"
            />
          </a>
        </div>
      </div>
      <div className="hidden md:flex text-sm pr-10 space-x-20">
        <a href="#">
          <span className="hover:text-gray-300 text-xs">HOME</span>
        </a>
        <a href="#mission">
          <span className="hover:text-gray-300 text-xs">MISSION</span>
        </a>
        <a href="#about">
          <span className="hover:text-gray-300 text-xs">ABOUT</span>
        </a>
        <a href="#services">
          <span className="hover:text-gray-300 text-xs">SERVICES</span>
        </a>
        <a href="tel:+919366313160">
          <span className={`border ${scrolled || menuOpen ? "border-white hover:bg-black hover:text-white" : "border-white hover:bg-white hover:text-black"} px-4 w-full py-1 rounded-full`}>
            CONTACT
          </span>
        </a>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
          <svg className={`w-6 h-6 ${scrolled || menuOpen ? "text-white" : "text-white"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div className={`md:hidden absolute ${menuOpen ? 'translate-y-44 bg-black' : '-translate-y-full bg-none'} left-0 transition-transform duration-300 ease-in-out w-full mt-4 py-10 flex flex-col items-center text-white bg-black space-y-4 gap-5 pt-10 z-40`}>
        <a href="#" onClick={() => setMenuOpen(false)}>
          <span className="hover:text-gray-300">HOME</span>
        </a>
        <a href="#mission" onClick={() => setMenuOpen(false)}>
          <span className="hover:text-gray-300">MISSION</span>
        </a>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          <span className="hover:text-gray-300">ABOUT</span>
        </a>
        <a href="#services" onClick={() => setMenuOpen(false)}>
          <span className="hover:text-gray-300">SERVICES</span>
        </a>
        <a href="tel:+919366313160" onClick={() => setMenuOpen(false)}>
          <span className="border border-white px-4 w-full py-1 rounded-full hover:bg-white hover:text-blue-600">
            CONTACT
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

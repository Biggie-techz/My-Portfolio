import React, { useState } from 'react';
import logo from '../assets/logo/logo.png';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="w-full bg-neutral-950/5 backdrop-blur-xl text-white sticky top-0 left-0 z-10 p-5 md:px-20 xl:px-5">
      <div className='max-w-[1650px] mx-auto relative'>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-8 h-8 md:w-14 md:h-14" />
            <p className="font-bold text-2xl">
              <span className='text-purple-600'>AY</span>O</p>
          </div>
          <div className="hidden lg:flex gap-8 text-lg font-medium">
            <Link to="/" className={`hover:text-purple-500 transition ${location.pathname === '/' ? 'text-purple-500' : ''}`}>
              Home
            </Link>
            <Link to="/about" className={`hover:text-purple-500 transition ${location.pathname === '/about' ? 'text-purple-500' : ''}`}>
              About
            </Link>
            <Link to="/services" className={`hover:text-purple-500 transition ${location.pathname === '/services' ? 'text-purple-500' : ''}`}>
              Services
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white text-2xl"
              >
                ☰
              </button>
            </div>
            <div className="hidden lg:block">Contact</div>
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden bg-purple-600 text-white p-4 absolute top-full left-0 w-full">
            <Link to="/" className={`block py-2 hover:underline underline-offset-8 transition ${location.pathname === '/' ? 'underline' : ''}`}>
              Home
            </Link>
            <Link to="/about" className={`block py-2 hover:underline underline-offset-8 transition ${location.pathname === '/about' ? 'underline' : ''}`}>
              About
            </Link>
            <Link to="/" className={`block py-2 hover:underline underline-offset-8 transition ${location.pathname === '/' ? 'underline' : ''}`}>
              Services
            </Link>
            <div className="py-2">Contact</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;

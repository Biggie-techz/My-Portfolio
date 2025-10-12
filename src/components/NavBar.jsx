import React, { useState } from 'react';
import logo from '../assets/logo/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-neutral-950/5 backdrop-blur-xl text-white sticky top-0 left-0 z-10 p-5 md:px-14 xl:px-5">
      <div className='max-w-[1650px] mx-auto relative'>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-8 h-8 md:w-14 md:h-14" />
            <p className="font-bold text-2xl">
              <span className='text-purple-600'>AY</span>O</p>
          </div>
          <div className="hidden lg:flex gap-8 text-lg font-medium">
            <Link to="/" className="hover:text-purple-500 transition">
              Home
            </Link>
            <Link to="/" className="hover:text-purple-500 transition">
              About
            </Link>
            <Link to="/" className="hover:text-purple-500 transition">
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
            <Link to="/" className="block py-2 hover:underline underline-offset-8 transition">
              Home
            </Link>
            <Link to="/" className="block py-2 hover:underline underline-offset-8 transition">
              About
            </Link>
            <Link to="/" className="block py-2 hover:underline underline-offset-8 transition">
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

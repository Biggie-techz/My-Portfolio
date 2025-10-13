import React from 'react';
import Background from '../components/Background';
import NavBar from '../components/NavBar';

const Services = () => {
  return (
    <>
      <Background />
      <NavBar />
      <div className="h-screen w-full flex items-center justify-center">
        <p className='text-5xl font-bold text-white z-10'>Services</p>
      </div>
    </>
  );
};

export default Services;

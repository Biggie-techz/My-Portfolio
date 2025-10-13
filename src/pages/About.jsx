import React from 'react';
import Background from '../components/Background';
import NavBar from '../components/NavBar';

const About = () => {
  return (
    <>
      <NavBar />
      <Background />
      <div className="h-screen w-full flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white z-10">About Page</h1>
      </div>
    </>
  );
};

export default About;

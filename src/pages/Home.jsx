import React from 'react';
import Background from '../components/Background';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import Intro from '../components/Intro';
import CarouselStrip from '../components/CarouselStrip';
import Experience from '../components/Experience';
import MySkills from '../components/MySkills';
import MyProjects from '../components/MyProjects';
const Home = () => {
  return (
    <div className="text-2xl font-bold h-screen w-full text-white overflow-scroll">
      <Background />
      <NavBar />
      <Hero />
      <Intro />
      <CarouselStrip />
      <Experience />

      <MySkills />
      <MyProjects />
    </div>
  );
};
export default Home;

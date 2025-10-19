import React from 'react';
import Background from '../components/Background';
import NavBar from '../components/NavBar';
import Socials from '../components/Socials';
import Footer from '../components/Footer';
import MyProjects from '../components/MyProjects';

const Projects = () => {
  return (
    <>
      <Background />
      <NavBar />
      <div className="h-screen overflow-y-auto w-full">
        <MyProjects />
        <Footer />
      </div>
    </>
  );
};

export default Projects;

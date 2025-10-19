import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Background from '../components/Background';
import Footer from '../components/Footer';
import { InfinitySpin } from 'react-loader-spinner';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/projects.json')
      .then((response) => response.json())
      .then((data) => {
        const projectData = data[parseInt(id) - 1];
        setProject(projectData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching project data:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="text-white flex items-center justify-center text-center py-20 w-full h-screen">
        <Background />

        <InfinitySpin
          visible={true}
          width="200"
          color="#ffffff"
          ariaLabel="infinity-spin-loading"
        />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="text-white text-center py-20">Projects not found</div>
    );
  }

  return (
    <>
      <Background />
      <NavBar />
      <div className="relative flex flex-col h-screen w-full overflow-y-scroll">
        <div className="p-5 md:px-14 xl:px-5 pt-16 max-w-[1400px] mx-auto text-white">
          <div className="flex flex-col items-center gap-10">
            <h1 className="text-3xl font-medium text-white">{project.name}</h1>
            <img
              src={project.primaryImage}
              alt={project.title}
              className="w-full max-w-md"
            />
            <h1 className="text-3xl font-semibold text-white">{project.intro}</h1>
            <p className="text-lg text-neutral-300">{project.description}</p>
            {project.additionalImages.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {project.additionalImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.title} additional ${index + 1}`}
                    className="w-full object-cover"
                  />
                ))}
              </div>
            )}
            <div className="w-full flex flex-col gap-5">
              <h2 className="text-3xl font-medium mb-2">Project Summary</h2>
              <p className="text-base text-neutral-400">{project.summary}</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProjectDetails;

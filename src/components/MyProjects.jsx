import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MyProjects = () => {
    const [projects, setProjects] = useState([]);
    const [isLg, setIsLg] = useState(false);

    useEffect(() => {
        fetch('/data/projects.json')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    
      useEffect(() => {
        const handleResize = () => {
          setIsLg(window.innerWidth >= 1024);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    return (
        <div className='relative flex flex-col items-center justify-between w-full p-5 py-20 md:px-20 xl:px-20 md:mt-10 lg:mt-20 xl:mt-10 max-w-[1400px] mx-auto'>
            <div className='flex flex-col items-center gap-3'>
                <p className='text-lg font-medium text-neutral-300'>Latest Works</p>
                <p className='text-3xl font-medium'>Explore My Popular <span className='text-purple-600'>Projects</span></p>
            </div>
            <div className='grid grid-cols-1 gap-5 gap-y-10 mt-10'>
                {projects.map((project, index) => (
                    <div key={index} className='grid grid-cols-1 lg:grid-cols-2 gap-3 hover:scale-[1.02] transition-transform duration-300'>
                        {(index % 2 === 0 || !isLg) ? (
                            <>
                                <img src={project.primaryImage} alt={project.title} className='w-full' />
                                <div className='flex flex-col justify-center gap-6 p-5 lg:p-10'>
                                    <h3 className='text-xl text-purple-500 font-medium'>{project.title}</h3>
                                    <p className='text-white text-base lg:text-5xl font-medium'>{project.name}</p>
                                    <p className='text-neutral-400 text-base font-mono'>{project.description}</p>
                                    <Link to={`/project-details/${index + 1}`} className='flex items-center justify-center w-14 aspect-square text-neutral-500 border border-neutral-500 hover:bg-purple-500 hover:scale-110 group transition rounded-full'>
                                        <ArrowUpRight className='inline-block group-hover:text-black group-hover:rotate-45 transition' />
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='flex flex-col justify-center gap-6 p-5 lg:p-10'>
                                    <h3 className='text-xl text-purple-500 font-medium'>{project.title}</h3>
                                    <p className='text-white text-base lg:text-5xl font-medium'>{project.name}</p>
                                    <p className='text-neutral-400 text-base font-mono'>{project.description}</p>
                                    <Link to={`/project-details/${index + 1}`} className='flex items-center justify-center w-14 aspect-square text-neutral-500 border border-neutral-500 hover:bg-purple-500 hover:scale-110 group transition rounded-full'>
                                        <ArrowUpRight className='inline-block group-hover:text-black group-hover:rotate-45 transition' />
                                    </Link>
                                </div>
                                <img src={project.primaryImage} alt={project.title} className='w-full' />
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyProjects;

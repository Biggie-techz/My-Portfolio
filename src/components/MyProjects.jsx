import { div } from 'framer-motion/client'
import React from 'react'

const MyProjects = () => {
    return (
        <div className='relative flex flex-col items-center justify-betweenw-full p-5 py-20 md:px-14 xl:px-20 md:mt-10 lg:mt-20 xl:mt-10 max-w-[1400px] mx-auto'>
            <div className='flex flex-col items-center gap-3'>
                <p className='text-lg font-medium text-neutral-300'>Latest Works</p>
                <p className='text-3xl font-medium'>Explore My Popular <span className='text-purple-600'>Projects</span></p>
            </div>
            <div></div>
        </div>
    )
}

export default MyProjects
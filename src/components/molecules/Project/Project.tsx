import IProject from '@/utils/interfaces/IProject'
import React from 'react'
import ProjectTechnologies from '../ProjectTechnologies/ProjectTechnologies';

type ProjectProps = {
    project: IProject;
}

const Project = ({ project }: ProjectProps) => {
    const { title, description, links, imagePath, technologies, launchDate } = project;
    return (
        <div className='pb-9 flex w-full gap-6 max-w-[936px]
            max-xl:max-w-[45%] max-xl:flex-col max-xl:gap-0
            max-md:max-w-none max-md:w-full'>
            <img src={imagePath} alt="project-image" className='w-[360px] pb-2 min-h-36 object-cover
            max-xl:w-full max-xl:object-contain
            max-md:min-h-52
            ' />
            <div>
                <div className='hidden max-xl:block'>
                    <ProjectTechnologies technologies={technologies} />
                </div>
                <h1 className='pb-2 font-semibold text-xl'>{title}</h1>
                <p className='pb-2 font-medium text-base'>{description}</p>
                <p className='pb-2  text-base text-gray-500 italic'>{launchDate}</p>
                <div className='flex gap-2 pb-2 justify-start w-full'>
                    {links.map((link, index) => (
                        <a key={index} href={link.url} target='_blank' className='text-sm italic font-semibold underline'>{link.title}</a>)
                    )}
                </div>
                <div className='block max-xl:hidden'>
                    <ProjectTechnologies technologies={technologies} />
                </div>
            </div>

        </div >
    )
}

export default Project
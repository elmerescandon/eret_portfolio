import IProject from '@/utils/interfaces/IProject'
import React from 'react'
import ProjectTechnologies from '../ProjectTechnologies/ProjectTechnologies';

type ProjectProps = {
    project: IProject;
}

const Project = ({ project }: ProjectProps) => {
    const { title, description, links, imagePath, technologies, launchDate } = project;
    return (
        <div className='pb-9 max-w-96'>
            <img src={imagePath} alt="project-image" className='w-full min-h-52 pb-2' />
            <ProjectTechnologies technologies={technologies} />
            <h1 className='pb-2 font-semibold text-xl'>{title}</h1>
            <p className='pb-2 font-medium text-base'>{description}</p>
            <p className='pb-2  text-base text-gray-500 italic'>{launchDate}</p>
            <div className='flex gap-2 pb-2 justify-start w-full'>
                {links.map((link, index) => (
                    <a key={index} href={link.url} target='_blank' className='text-sm italic font-semibold underline'>{link.title}</a>)
                )}
            </div>
        </div >
    )
}

export default Project
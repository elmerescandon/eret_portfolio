import AreaTitle from '@/components/molecules/AreaTitle/AreaTitle'
import Project from '@/components/molecules/Project/Project'
import IProject from '@/utils/interfaces/IProject'
import React, { useState } from 'react'

type AreaSectionProps = {
    title: string
    projects: IProject[]
}

const AreaSection = ({ title, projects }: AreaSectionProps) => {
    const [extend, setExtend] = useState(false)
    return (
        <div>
            <AreaTitle title={title} extend={extend} setExtend={setExtend} />
            <div className={`overflow-hidden transition-all duration-700 ease-in-out ${extend ? 'max-h-[9999px]' : 'max-h-0'}
                             flex justify-between items-start
                             max-xl:flex-wrap max-xl:gap-3 
                             max-md:gap-0 max-md:justify-center
                             max-sm:flex-col
                             `}>
                {projects.map((project, index) => (
                    <Project key={index} project={project} />
                ))
                }
            </div>

        </div>
    )
}

export default AreaSection
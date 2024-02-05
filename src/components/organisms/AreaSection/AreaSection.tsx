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
            <div className={`
                             flex justify-between items-start flex-col
                             max-xl:flex-wrap max-xl:gap-3 max-xl:flex-row
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
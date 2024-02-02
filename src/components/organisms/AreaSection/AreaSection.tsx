import AreaTitle from '@/components/molecules/AreaTitle/AreaTitle'
import React, { useState } from 'react'

type AreaSectionProps = {
    title: string
    projects: React.ReactNode[]
}

const AreaSection = ({ title, projects }: AreaSectionProps) => {
    const [extend, setExtend] = useState(false)
    return (
        <div>
            <AreaTitle title={title} extend={extend} setExtend={setExtend} />
            {projects.map((project, index) => (
                <div key={index}>
                    {project}
                </div>))
            }
        </div>
    )
}

export default AreaSection
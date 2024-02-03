import React from 'react'
import AreaSection from '../organisms/AreaSection/AreaSection'
import webProjects from '@/utils/projects/webProjects'

const SecondarySection = () => {
    return (
        <div>
            <AreaSection title='Web Development' projects={webProjects} />
            <AreaSection title='Design' projects={[]} />
            <AreaSection title='Academia' projects={[]} />
            <AreaSection title='Personal' projects={[]} />
        </div>
    )
}

export default SecondarySection
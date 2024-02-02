import React from 'react'
import AreaSection from '../organisms/AreaSection/AreaSection'

const SecondarySection = () => {

    const webProjects = [
        <div key={1} >Project 1</div>,
        <div key={2}>Project 2</div>,
        <div key={3}>Project 3</div>
    ]

    return (
        <div>
            <AreaSection title='Web Development' projects={[webProjects]} />
            <AreaSection title='Design' projects={[]} />
            <AreaSection title='Academia' projects={[]} />
            <AreaSection title='Personal' projects={[]} />
        </div>
    )
}

export default SecondarySection
import AreaTitle from '@/components/molecules/AreaTitle/AreaTitle'
import { Transition } from '@headlessui/react'
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
            <Transition
                show={extend}
                appear={true}
                enter="transition-transform transform duration-500 ease-out"
                enterFrom="-translate-y-1/2"
                enterTo="translate-y-0"
                leave="transition-transform transform duration-500 ease-in"
                leaveFrom="translate-y-0"
                leaveTo="-translate-y-1/2"
            >
                {projects.map((project, index) => (
                    <div key={index}>
                        {project}
                    </div>))
                }
            </Transition>


        </div>
    )
}

export default AreaSection
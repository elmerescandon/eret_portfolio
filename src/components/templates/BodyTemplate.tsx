import React from 'react'

type BodyTemplateProps = {
    children: React.ReactNode;
}

const BodyTemplate = ({ children }: BodyTemplateProps) => {
    return (
        <div className='
        max-xl:pl-[117px] pr-8
        max-lg:px-4'>{children}</div>
    )
}

export default BodyTemplate
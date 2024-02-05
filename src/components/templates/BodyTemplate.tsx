import React from 'react'

type BodyTemplateProps = {
    children: React.ReactNode;
}

const BodyTemplate = ({ children }: BodyTemplateProps) => {
    return (
        <div className='
        pt-14 px-[176px]
        max-xl:pl-[117px] max-xl:pr-8 max-xl:pt-0
        max-lg:px-4'>{children}</div>
    )
}

export default BodyTemplate
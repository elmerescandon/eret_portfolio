import React from 'react'

type BodyTemplateProps = {
    children: React.ReactNode;
}

const BodyTemplate = ({ children }: BodyTemplateProps) => {
    return (
        <div className='px-4'>{children}</div>
    )
}

export default BodyTemplate
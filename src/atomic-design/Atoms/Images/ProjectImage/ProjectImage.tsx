import Image from 'next/image'
import React from 'react'

type ProjectImageProps = {
    src: string
    alt: string
}


const ProjectImage = ({ src, alt }: ProjectImageProps) => {
    return (
        <Image src={src} alt={alt} width={158} height={158} />
    )
}

export default ProjectImage
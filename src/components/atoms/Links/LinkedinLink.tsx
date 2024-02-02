import Image from 'next/image'
import React from 'react'

type LinkedinLinkProps = {
    to: string
    text: string
}

const LinkedinLink = ({ to, text }: LinkedinLinkProps) => {
    return (
        <div className='flex items-center justify-between w-full'>
            <Image src="icons/linkedin_small_icon.svg" alt="Small Linkedin" width={24} height={24} />
            <a className='text-sm underline font-medium text-wrap break-words text-right min-w-32
                            active:font-extrabold
            ' href={to} target='_blank'>{text}</a>
        </div>
    )
}

export default LinkedinLink
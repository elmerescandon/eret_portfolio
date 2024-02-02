import Image from 'next/image'
import React from 'react'

type GithubLinkProps = {
    text: string;
    to: string;
}

const GithubLink = ({ text, to }: GithubLinkProps) => {
    return (
        <div className='flex items-center justify-between w-full'>
            <Image src="icons/github_small_icon.svg" alt="Small Github" width={24} height={24} />
            <a className='text-sm underline font-medium text-wrap break-words text-right min-w-32 active:font-extrabold' href={to} target='_blank'>{text}</a>
        </div>
    )
}

export default GithubLink
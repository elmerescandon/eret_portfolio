import Image from 'next/image'
import React from 'react'

type GoogleScholarLinkProps = {
    toGoogleSholcar: string
    toCV: string
}

const GoogleScholarLink = ({ toGoogleSholcar, toCV }: GoogleScholarLinkProps) => {
    return (
        <div className='flex items-center justify-between w-full'>
            <Image src="icons/gratuation_cap_small_icon.svg" alt="Small Graduation Cap" width={24} height={24} />
            <div className='flex gap-2 justify-start items-center'>
                <a className='text-sm underline font-medium text-wrap break-words text-right active:font-extrabold' href={toGoogleSholcar} target='_blank'>Google Scholar</a>
                <a className='text-sm underline font-medium text-wrap break-words text-right active:font-extrabold' href={toCV} target='_blank'>CV</a>
            </div>
        </div>
    )
}

export default GoogleScholarLink
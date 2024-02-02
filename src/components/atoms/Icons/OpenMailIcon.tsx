import Image from 'next/image'
import React from 'react'

const OpenMailIcon = () => {
    return (
        <Image
            src={'/icons/mail_icon.svg'}
            alt={'Open Mail Icon'}
            width={36}
            height={36}
        />
    )
}

export default OpenMailIcon;
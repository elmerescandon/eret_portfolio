import Image from 'next/image'
import React from 'react'

const FourBarIcon = () => {
    return (
        <Image
            src={'/icons/bar_icon.svg'}
            alt={'Four Bar Icon'}
            width={36}
            height={36}
        />
    )
}

export default FourBarIcon;
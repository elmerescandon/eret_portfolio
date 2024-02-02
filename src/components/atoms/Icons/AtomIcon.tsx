import Image from 'next/image'
import React from 'react'

const AtomIcon = () => {
    return (
        <Image
            src={'/icons/atom_icon.svg'}
            alt={'Homepage Icon'}
            width={36}
            height={36}
        />
    )
}

export default AtomIcon
import React from 'react'

type ButtonSectionTypes = {
    position: string;
    name: string;
}

const ButtonSection = ({ position, name }: ButtonSectionTypes) => {
    return (
        <button className='text-2xl font-medium text-right'>{name}</button>
    )
}

export default ButtonSection
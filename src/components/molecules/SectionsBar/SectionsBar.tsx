import ButtonSection from '@/components/atoms/Buttons/ButtonSection'
import React from 'react'

const SectionsBar = () => {
    return (
        <div className='py-8 flex flex-col justify-end gap-4 items-end'>
            <ButtonSection name='About' position='' />
            <ButtonSection name='Web Development' position='' />
            <ButtonSection name='Design' position='' />
            <ButtonSection name='Academia' position='' />
            <ButtonSection name='Personal' position='' />
        </div>
    )
}

export default SectionsBar
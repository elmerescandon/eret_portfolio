import ButtonBlue from '@/components/atoms/Buttons/ButtonBlue'
import React from 'react'

// TODO: Add a button to contact me and a button to check out my projects

const CallToAction = () => {
    return (
        <div className='pb-5 flex justify-between gap-2'>
            <ButtonBlue text='Contact me' onClick={() => console.log('Contact Me')} />
            <ButtonBlue type='secondary' text='Check out my projects' onClick={() => console.log('Checkout my projects')} />
        </div>
    )
}

export default CallToAction
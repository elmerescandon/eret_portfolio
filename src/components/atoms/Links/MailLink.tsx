import Image from 'next/image'
import React from 'react'

type MailLinkProps = {
    mail: string;
    to: string;
}

const MailLink = ({ mail, to }: MailLinkProps) => {
    return (
        <div className='flex items-center justify-between w-full'>
            <Image src="icons/email_small_icon.svg" alt="Small Mail" width={24} height={24} />
            <a className='text-sm underline font-medium text-wrap break-words text-right min-w-32
                          active:font-extrabold
            ' href={to} target='_blank'>{mail}</a>
        </div>
    )
}

export default MailLink
import { DocumentTextIcon, PaperClipIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

const Sidebar = () => {
    return (
        <div className='hidden w-[72px] items-center max-lg:flex max-lg:flex-col max-md:hidden px-[18px] gap-4'>
            <a className='block' href='mailto:elmer.escandontufino@gmail.com' target='_blank'>
                <Image src="icons/email_small_icon.svg" alt="Small Mail" width={36} height={36} />
            </a>

            <a className='block' href='https://www.linkedin.com/in/elmerescandontufino/' target='_blank'>
                <Image src="icons/linkedin_small_icon.svg" alt="Small Linkedin" width={36} height={36} />
            </a>

            <a className='block' href="https://github.com/elmerescandon" target='_blank'>
                <Image src="icons/github_small_icon.svg" alt="Small Github" width={36} height={36} />
            </a>

            <a className='block' href="https://scholar.google.com/citations?user=cDpA43kAAAAJ&hl=es&oi=ao" target='_blank'>
                <Image src="icons/gratuation_cap_small_icon.svg" alt="Small Google Scholar" width={36} height={36} />
            </a>

            <a className='block' href='https://drive.google.com/file/d/1Bf-CXEmpmpDoIgoW5OTvb9le_GPY1VVF/view?usp=sharing' target='_blank'>
                <DocumentTextIcon className='h-9 w-9' />
            </a>

        </div>
    )
}

export default Sidebar
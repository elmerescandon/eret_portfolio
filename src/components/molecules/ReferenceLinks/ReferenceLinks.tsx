import GithubLink from '@/components/atoms/Links/GithubLink'
import GoogleScholarLink from '@/components/atoms/Links/GoogleScholarLink'
import LinkedinLink from '@/components/atoms/Links/LinkedinLink'
import MailLink from '@/components/atoms/Links/MailLink'
import React from 'react'

const ReferenceLinks = () => {
    return (
        <div className='w-full flex flex-col gap-4'>
            <MailLink mail="Send me an e-mail" to="mailto:elmer.escandontufino@gmail.com" />
            <LinkedinLink to="https://www.linkedin.com/in/elmerescandontufino/" text='/elmerescandontufino' />
            <GithubLink to="https://github.com/elmerescandon" text='/elmeresescandon' />
            <GoogleScholarLink toGoogleSholcar="https://scholar.google.com/citations?user=cDpA43kAAAAJ&hl=es&oi=ao" toCV="https://drive.google.com/file/d/1Bf-CXEmpmpDoIgoW5OTvb9le_GPY1VVF/view?usp=sharing" />
        </div>
    )
}

export default ReferenceLinks